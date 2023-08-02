import React from 'react';
import './MovieDetails.css'; 

function MovieDetails({ movie }) {
  return (
    <div className="movie-details">
      <div className="poster">
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <p>Length: {movie.length}</p>
     
      </div>
    </div>
  );
}

export default MovieDetails;
