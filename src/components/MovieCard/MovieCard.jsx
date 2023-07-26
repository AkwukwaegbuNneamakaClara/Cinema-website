import React from 'react';
import './MovieCard.css'; // Import the MovieCard.css file

function MovieCard({ movie }) {
  const { title, poster, length } = movie;

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>Length: {length}</p>
    </div>
  );
}

export default MovieCard;
