import { useEffect, useState } from 'react';

import styles from './Form.module.css';
import Button from './Button';
import BackButton from './BackButton';
import { useUrlPosition } from '../hooks/useUrlPosition';
import Spinner from '../Components/Spinner';
import Message from '../Components/Message';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCities } from '../src/contexts/citiesContext';
import { useNavigate } from 'react-router-dom';

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const GEOLOCATE_BASE_URL =
    'https://api.bigdatacloud.net/data/reverse-geocode-client';

  const [isGeoLocationLoading, setIsGeoLocationLoading] = useState(false);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [emoji, setEmoji] = useState();
  const [lat, lng] = useUrlPosition();
  const [geoCodingError, setGeoCodingError] = useState('');

  const { createCity, cities, isLoading } = useCities();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchCityData() {
        try {
          setIsGeoLocationLoading(true);
          setGeoCodingError('');
          const res = await fetch(
            `${GEOLOCATE_BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log('data', data);

          if (!data.countryName) {
            throw new Error(
              "That doesn't seems to be a city.Plase click somewhere else 😞"
            );
          }
          setCityName(data.city || data.locality || 'unKnown');
          setCountry(data.countryCode || '');
          setEmoji(convertToEmoji(data.countryCode));
        } catch (error) {
          console.log('error', error);
          setGeoCodingError(error.message);
        } finally {
          setIsGeoLocationLoading(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName && !country) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    const isCityAvailable = cities.some(
      (city) => city.cityName === cityName && city.country === country
    );

    // console.log('New city', newCity);
    if (!isCityAvailable) {
      await createCity(newCity);
      navigate('/app/cities');
    }
  };

  if (isGeoLocationLoading) return <Spinner />;

  if (!lat && !lng)
    return <Message message='Start by clicking somewhere in the map' />;

  if (geoCodingError) return <Message message={geoCodingError} />;

  return (
    <form
      className={`${styles.form} ${isLoading ? `${styles.loading}` : ''}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input
          id='cityName'
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        {/* <input
          id='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker
          id='date'
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat='dd/MM/yyyy'
        />
      </div>

      <div className={styles.row}>
        <label htmlFor='notes'>Notes about your trip to {cityName}</label>
        <textarea
          id='notes'
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'>Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
