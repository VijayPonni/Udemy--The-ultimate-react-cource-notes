import {useState , useEffect } from 'react'

export function useGeolocation(countClicksValue) {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);
  
    useEffect(function(){
      if(countClicksValue){
        if (!navigator.geolocation)
        return setError("Your browser does not support geolocation");
  
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    }
    },[countClicksValue])

      return {
        isLoading , position , error
      }
  
  }