import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../src/contexts/citiesContext";

function CityList() {
  const { cities: citiesList, isLoading } = useCities();

  console.log("isLoading", isLoading);
  if (isLoading) return <Spinner />;

  if (!citiesList.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {citiesList.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
