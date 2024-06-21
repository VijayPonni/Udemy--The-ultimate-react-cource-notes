import { useEffect, useState , useRef} from "react";
import StarRating from "./StarRating";
import { useMovies } from "./useMovies";
import { KEY } from './constants';
import { useLocalStorageState } from "./useLocalStorageState";
import { useKey } from "./useKey";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);



export default function App() {
  const [query, setQuery] = useState("");
  const { movies , isLoading , error } = useMovies(query);
 
  // const [watched, setWatched] = useState([]);

  //Getting value from localStorage 

const [ watched , setWatched ] = useLocalStorageState([], "Watched")

const [selectedMovieId, setSelectedMovieId] = useState(null);

  function handleCloseMovieSelection() {
    setSelectedMovieId(null);
  }

  function handleWatched(movie) {
    setWatched((currItem) => [...currItem, movie]);
  }

  function handleDeleteWateched(id){
    setWatched((currItem) => currItem.filter( (movie)=> movie.imdbID !== id));
  }



  // WRONG WAY
  // fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`).
  // then(res => res.json()).
  // then(data =>
  // setMovies(data.Search)
  // )




  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} onCloseSelection={handleCloseMovieSelection}/>
        <Results movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {(isLoading || !error) && (
            <MoviesList movies={movies} onMovieSelect={setSelectedMovieId} />
          )}
          {error && <Error message={error} />}
        </Box>

        <Box>
          {selectedMovieId ? (
            <MovieDetail
              selectedMovieId={selectedMovieId}
              onCloseSelection={handleCloseMovieSelection}
              onAddWatched={handleWatched}
              watchedMovieList={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} onDeleteWatchedMovie={ handleDeleteWateched } />
            </>
          )}
        </Box>
      </Main>

      {
        // IMPLEMENTED Component composition using explict prop approach
        /* <Main jsx={
          <>
          <Box> 
            <MoviesList movies={ movies} />
          </Box>

          <Box>
          <WatchedSummary watched={watched}/>
          <WatchedMoviesList watched={watched} />
          </Box>
          </>
        } /> */
      }
    </>
  );
}

function Loader() {
  return <p className="loader"> Loading... </p>;
}

function Error({ message }) {
  return <p className="error">🚨 {message} </p>;
}

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({ query, setQuery , onCloseSelection}) {

  const inputEl = useRef(null);

  useKey('Enter', function(){
    if( document.activeElement === inputEl.current ) return;
    inputEl.current.focus();
    setQuery('');
  })

  function handleQueryChange(value){
    setQuery(value);
    onCloseSelection();
  }

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => handleQueryChange(e.target.value) }
      ref={inputEl}
    />
  );
}

function Results({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

// IMPLEMENTED Component composition using explict prop approach
//
// function Main({ jsx }) {
//   return (
//     <main className="main">
//       { jsx }
//   </main>
//   )
// }

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MoviesList({ movies, onMovieSelect }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie onMovieSelect={onMovieSelect} movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie, onMovieSelect }) {
  return (
    <li
      onClick={() =>
        onMovieSelect((currValue) =>
          currValue === movie.imdbID ? null : movie.imdbID
        )
      }
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        {/* <p>
        <span>#️⃣</span>
        <span>{watched.length} movies</span>
        </p> */}
        <MovieStates emoji="#️⃣" info={`${watched.length} movies`} />
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMoviesList({ watched , onDeleteWatchedMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatchedMovie={onDeleteWatchedMovie}/>
      ))}
    </ul>
  );
}

function WatchedMovie({ movie , onDeleteWatchedMovie}) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button className="btn-delete" onClick={ ()=> onDeleteWatchedMovie(movie.imdbID) }> X </button>
      </div>
    </li>
  );
}

function MovieDetail({
  selectedMovieId,
  onCloseSelection,
  onAddWatched,
  watchedMovieList,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieDetail, setMovieDetail] = useState({});
  const [userRating, setUserRating] = useState(null);

  // Creating Ref variable
  const countRef = useRef(0);

  // updating Ref variable in useEffect  ( Because we are not allowed to update refs in render logic. So we should use useEffect )

  useEffect(function(){
    if(userRating) countRef.current++;
  },[userRating])

  
  // const movie = watchedMovieList.find( (movie)=> movie.imdbID === selectedMovieId  )
  const isWatched = watchedMovieList
    .map((movie) => movie.imdbID)
    .includes(selectedMovieId);

  const WatchedUserRating = watchedMovieList.find( (movie)=> movie.imdbID === selectedMovieId )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movieDetail;





  /*eslint-disable */
//   if(imdbRating > 1 ) {  const [ test, setTest ] = useState('TEST') }


  useEffect(  
    function () {
      async function GetMovieDetail() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`
          );

          if (!res.ok) {
            const errorMessage = "Something went wrong fetching movies";
            setError(errorMessage);
            // throw new Error(errorMessage)
            return;
          }

          const data = await res.json();
          setMovieDetail(data);

          if (data.Response === "False") {
            const errorMessage = "Movie not found";
            setError(errorMessage);
            return;
            // throw new Error("Movie not found")
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      GetMovieDetail();
    },
    [selectedMovieId]
  );

  useEffect(
    function(){
      if(!title) return;
      document.title = `Movie | ${title}`;

      return function(){
        document.title = 'usePopcorn';
      }
    }
,[title]
  ); 

  // Handling ESCAPE key press

  // useEffect(function(){
  //     function handleEscapeKeyPress(e){
  //         if(e.code === 'Escape'){
  //           onCloseSelection();
  //         }
  //     } 
  //     document.addEventListener('keydown',handleEscapeKeyPress);

  //     return function(){
  //       document.removeEventListener('keydown',handleEscapeKeyPress);
  //     }

  // },[onCloseSelection])


  useKey('Escape',onCloseSelection);



  function handleWatchedList() {

    const newWatchMovie = {
      imdbID: selectedMovieId,
      title: title,
      year: year,
      poster: poster,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating,
      countOfRatingDecision:countRef.current
    };

    onAddWatched(newWatchMovie);
    onCloseSelection();
  }

  return (
    <div>
      <button className="btn-back" onClick={onCloseSelection}>
        👈
      </button>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <div className="details">
          <header>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{`${released}. ${runtime}`}</p>
              <p>{genre}</p>
              <p>{`🌟 ${imdbRating} IMDb Rating`}</p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxStarCount={10}
                    size={24}
                    onUpdateRating={(rating) => setUserRating(rating)}
                  />
                  {userRating && (
                    <button className="btn-add" onClick={handleWatchedList}>
                      {" "}
                      + Add to watchList
                    </button>
                  )}
                </>
              ) : 
              <p> You rated this Movie { WatchedUserRating } <span> 🌟 </span></p>
              }
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p> Staring {actors}</p>
            <p> Directed by {director}</p>
          </section>
        </div>
      )}
      {error && <Error message={error} />}
    </div>
  );
}

function MovieStates({ emoji, info }) {
  return (
    <p>
      <span>{emoji}</span>
      <span>{info}</span>
    </p>
  );
}
