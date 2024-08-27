import { Link } from "react-router-dom";
import Styles from "./CityItem.module.css";
import { useCities } from "../src/contexts/citiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity } = useCities();

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${Styles.cityItem} ${
          id === currentCity.id ? Styles["cityItem--active"] : ""
        }`}
      >
        <span className={Styles.emoji}>{emoji}</span>
        <h3 className={Styles.name}>{cityName}</h3>
        <time className={Styles.date}>{formatDate(date)}</time>
        <button className={Styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
