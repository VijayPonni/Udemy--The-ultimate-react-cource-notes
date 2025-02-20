import { useCallback } from 'react';
import { createContext, useEffect, useContext, useReducer } from 'react';

const citiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loadingStarted':
      return {
        ...state,
        isLoading: true,
      };
    case 'cities/loaded':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case 'city/loaded':
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case 'city/create':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case 'city/delete':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error('No action type');
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const BASE_URL = 'http://localhost:8000';

  useEffect(function () {
    // const controller = new AbortController();

    async function fetchCities() {
      try {
        dispatch({ type: 'loadingStarted' });
        const res = await fetch(
          `${BASE_URL}/cities`
          //   {
          //   signal: controller.signal,
          // }
        );
        const data = await res.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch (error) {
        if (error.name === 'AbortError') return;
        dispatch({
          type: 'rejected',
          payload: 'Error occured while loading the cities',
        });
      }
    }
    fetchCities();

    // return () => controller.abort();
  }, []);

  const fetchCurrentCity = useCallback(
    async (id) => {
      if (Number(id) === currentCity.id) return;
      try {
        dispatch({ type: 'loadingStarted' });
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: 'city/loaded', payload: data });
      } catch (error) {
        if (error.name === 'AbortError') return;
        dispatch({
          type: 'rejected',
          payload: 'Error occured while loading the city',
        });
      }
    },
    [currentCity.id]
  );

  const createCity = async (newCity) => {
    try {
      dispatch({ type: 'loadingStarted' });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch({ type: 'city/create', payload: data });
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'Error occured while t=creating the city',
      });
    }
  };

  const deleteCity = async (id) => {
    try {
      dispatch({ type: 'loadingStarted' });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'city/delete', payload: id });
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'Error occured while deleting the city',
      });
    }
  };

  return (
    <citiesContext.Provider
      value={{
        cities,
        isLoading,
        fetchCurrentCity,
        currentCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </citiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(citiesContext);

  if (context === undefined) {
    throw new Error('CitiesContext was outside of the Cities Provider');
  }

  return context;
}

export { CitiesProvider, useCities };
