import React, { useEffect, useState } from 'react'
import SearchIcon from './assets/search.svg'
import MovieCard from './MovieCard';
//95ac84ac

const API_URL = "https://www.omdbapi.com/?i=95ac84ac&apikey=95ac84ac";

// Object of movie app {
//   "Title": "Avengers: Age of Ultron",
//   "Year": "2015",
//   "imdbID": "tt2395427",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  
   const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
   }

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchMovie)}
        />
      </div>
         
        {
          movies.length > 0 ? (
             <div className="container">
                {movies.map((movie, indx) => (
                  <MovieCard 
                    movies = {movie}
                    key={indx}
                  />
                ))}
             </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
        }

    </div>
  )
}

export default App
