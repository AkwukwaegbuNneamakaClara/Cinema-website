import React, { useState } from 'react';
import './MovieList.css'; // Import the MovieList.css file
import MovieDetails from '../MovieDetails/MovieDetails'; // Import the MovieDetails component
import MovieCard from '../MovieCard/MovieCard'; // Import the MovieCard component

function MovieList({ movies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    // Function to handle movie selection
    const handleMovieSelect = (movie) => {
      setSelectedMovie(movie);
    };
  return (
    <div>
    <div className="movie-list">
      {movies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieSelect(movie)} />
         ))}
       </div>
       {selectedMovie && <MovieDetails movie={selectedMovie} />}
     </div>
   );
 }
 

export default MovieList;
