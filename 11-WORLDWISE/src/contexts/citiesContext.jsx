import { createContext, useState, useEffect, useContext } from "react";

const citiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  const BASE_URL = "http://localhost:8000";

  useEffect(function () {
    // const controller = new AbortController();

    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${BASE_URL}/cities`
          //   {
          //   signal: controller.signal,
          // }
        );
        const data = await res.json();
        console.log("data", data);
        setCities(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        setIsLoading(false);
        console.log("error", error);
        alert("Error occured while loading data", error.error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();

    // return () => controller.abort();
  }, []);

  const fetchCurrentCity = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      if (error.name === "AbortError") return;
      setIsLoading(false);
      alert("Error occured while loading data", error.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <citiesContext.Provider
      value={{
        cities,
        isLoading,
        fetchCurrentCity,
        currentCity,
      }}
    >
      {children}
    </citiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(citiesContext);

  if (context === undefined) {
    throw new Error("CitiesContext was outside of the Cities Provider");
  }

  return context;
}

export { CitiesProvider, useCities };
