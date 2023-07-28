import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Title from './components/Title/Title'; // Adjust the import path

import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import BookingPage from './components/BookingPage/BookingPage';
import ScreeningList from './components/ScreeningList/ScreeningList'; // Import the ScreeningList component
import sampleMovies from './components/sampleMovieData'; // Import the sampleMovies data
import sampleScreeningListData from './components/sampleScreeningListData'; // Import the sampleScreenings data

import './HomePage.css'; // Import the app.css file



function HomePage() {
  return (
    <Router>
      <div>
        <Title /> {/* This line includes the Title component */}
        <h1>Now Showing</h1>
        {/* Add Links for navigation */}
        <Link to="/">Home</Link>
        <Link to="/movies">Movie List</Link>
        <Link to="/booking">Booking</Link>
        <Switch>
        <Route exact path="/" render={() => <MovieList movies={sampleMovies} />} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/booking/:id" component={BookingPage} />
          {/* Add more routes for other pages if needed */}
        </Switch>
        <ScreeningList screenings={sampleScreeningListData} />{/* pass your screening data here */} 
      </div>
    </Router>
  );
}

export default HomePage;
