import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './MovieList.css'; 
import MovieCard from '../MovieCard/MovieCard'; 
import MovieDetails from '../MovieDetails/MovieDetails';
import CategoryFilter from '../CategoryFilter/CategoryFilter'; 

function MovieList({ movies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const history = useHistory();
  
    // Function to handle movie selection
    const handleMovieSelect = (movie) => {
      setSelectedMovie(movie);
    };
     // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
   // Filter movies by category
   const filteredMovies = selectedCategory
   ? movies.filter((movie) => movie.category === selectedCategory)
   : movies;
    // Get all unique categories for the category filter
    const allCategories = Array.from(new Set(movies.map((movie) => movie.category)));

    const handleClick = (movieId) => {
      // Navigate to the BookingPage with the selected movie's ID as a parameter
      history.push(`/booking/${movieId}`);
    };
  return (
    <div>
      <CategoryFilter
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
    <div className="movie-list">
    {filteredMovies.map((movie) => (
         //<MovieCard key={movie.id} movie={movie} onClick={() => handleMovieSelect(movie)} />
      <Link key={movie.id} to={`/booking/${movie.id}`} onClick={() => handleMovieSelect(movie)}>
           <button onClick={() => handleClick(movie.id)}>Book Now</button>
            <MovieCard movie={movie} />
          </Link>
         ))}
       </div>
       {selectedMovie && <MovieDetails movie={selectedMovie} />}
     </div>
   );
 }
 /*function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch movie data from the API
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/rest-route');
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieSelect = (movie) => {
    // Implement your logic for handling the selected movie
    console.log('Selected movie:', movie);
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieSelect(movie)} />
      ))}
    </div>
  );
}*/
 

export default MovieList;
