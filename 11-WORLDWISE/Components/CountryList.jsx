import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { useCities } from "../src/contexts/citiesContext";

function CountryList() {
  const { cities: citiesList, isLoading } = useCities();

  console.log("isLoading", isLoading);
  if (isLoading) return <Spinner />;

  if (!citiesList.length)
    return (
      <Message message="Add your first Country by clicking a Country on the map" />
    );
  const countriesList = citiesList.reduce((acc, currentValue) => {
    const filter = acc.filter(
      (value) => value.country === currentValue.country
    );
    !filter.length && acc.push(currentValue);
    return acc.map((cityDetail) => ({
      country: cityDetail.country,
      emoji: cityDetail.emoji,
    }));
  }, []);

  console.log("countriesList", countriesList);

  return <CountryListUi countries={countriesList} />;
}

const CountryListUi = ({ countries }) => (
  <ul className={styles.countryList}>
    {countries.map((country) => (
      <CountryItem country={country} key={country.id} />
    ))}
  </ul>
);

export default CountryList;
