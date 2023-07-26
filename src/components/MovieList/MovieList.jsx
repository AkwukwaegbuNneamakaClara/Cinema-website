import React from 'react';
import './MovieList.css'; // Import the MovieList.css file
import MovieCard from './MovieCard/MovieCard'; // Import the MovieCard component

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
