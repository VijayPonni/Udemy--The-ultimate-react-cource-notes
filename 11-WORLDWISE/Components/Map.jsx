import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import { useEffect, useState } from 'react';
import Button from './Button';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useCities } from '../src/contexts/citiesContext';
import { useGeolocation } from '../hooks/useGeolocation';
import { useUrlPosition } from '../hooks/useUrlPosition';

function Map() {
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  const {
    isLoading: isPositionLoading,
    position: geoLocationPosition,
    getPosition: getGeoLocationPosition,
  } = useGeolocation();

  const { cities } = useCities();

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geoLocationPosition) {
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    }
  }, [geoLocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <Button type='position' onClick={getGeoLocationPosition}>
          {isPositionLoading ? 'Loading...' : 'Use your position'}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <SetMapView position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function SetMapView({ position }) {
  console.log('postion', position);
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
