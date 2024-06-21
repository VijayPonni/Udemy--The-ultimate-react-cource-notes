import { useEffect , useState } from "react";
import { tempMovieData } from './constants'
import { KEY } from './constants';

export function useMovies(query){

    const [movies, setMovies] = useState(tempMovieData);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState("");
    

    useEffect(
        function () {
          const controller = new AbortController();
          async function FetchMovies() {
            try {
              setIsloading(true);
              setError("");
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                { signal: controller.signal }
              );
    
              if (!res.ok) {
                const errorMessage = "Something went wrong fetching movies";
                setError(errorMessage);
                // throw new Error(errorMessage)
                return;
              }
    
              const data = await res.json();
    
              if (data.Response === "False") {
                const errorMessage = "Movie not found";
                setError(errorMessage);
                return;
                // throw new Error("Movie not found")
              }
    
              setMovies(data.Search);
              setError("");
            } catch (err) {
              if(err.name !== 'AbortError'){
                setError(err.message);
              }
            } finally {
              setIsloading(false);
            }
          }
    
          if (query.length < 3) {
            setError("");
            setMovies([]);
            return;
          }
          FetchMovies();
    
          return function(){
            controller.abort();
          }
        },
        [query]
      );

      return {
        movies,isLoading,error
      }

}