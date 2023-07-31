import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Title from './components/Title/Title'; // Adjust the import path

import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import BookingPage from './components/BookingPage/BookingPage';
import ScreeningList from './components/ScreeningList/ScreeningList'; // Import the ScreeningList component
import sampleMovies from './components/sampleMovieData'; // Import the sampleMovies data
import sampleScreeningListData from './components/sampleScreeningListData'; // Import the sampleScreenings data
import CategoryFilter from './components/CategoryFilter/CategoryFilter'; // Import the CategoryFilter component

import './HomePage.css'; // Import the app.css file



function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allCategories = ['all', 'comedy', 'action', 'drama'];

  const handleCategorySelect = (category) => {
    console.log('Selected category:', category);
    setSelectedCategory(category);
  };
  // Filter the movieDetails data based on the selected category
  const filteredMovies =
    selectedCategory === 'all'
      ? sampleScreeningListData // Show all movies if 'All Categories' is selected
      : sampleScreeningListData.filter((screening) => screening.category === selectedCategory);

  return (
    <Router>
      <div>
        <Title /> {/* This line includes the Title component */}
        <Link to="/">Home</Link>
<Link to="/movies">Movie List</Link>
<Link to="/booking">Booking</Link>
        <Switch>
        <Route exact path="/" render={() => <MovieList movies={sampleMovies} />} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/booking/:id" component={BookingPage} />
          {/* Add more routes for other pages if needed */}
        </Switch>
        <div>
      {/* Render the CategoryFilter component and pass the necessary props */}
      <CategoryFilter categories={allCategories} onSelectCategory={handleCategorySelect} />

      {/* Render the ScreeningList component and pass the necessary props */}
      <ScreeningList screenings={filteredMovies} />
    </div>
      </div>
    </Router>
  );
}

export default HomePage;
