import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './components/Title/Title'; // Adjust the import path

import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import BookingPage from './components/BookingPage/BookingPage';
import ScreeningList from './components/ScreeningList/ScreeningList'; // Import the ScreeningList component
import sampleMovies from './components/sampleMoviesData'; // Import the sampleMovies data
import sampleScreeningListData from './components/sampleScreeningListData'; // Import the sampleScreenings data

import './HomePage.css'; // Import the app.css file



function HomePage() {
  return (
    <Router>
      <div>
        <Title /> {/* This line includes the Title component */}
        <h1>Now Showing</h1>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <MovieList movies={sampleMovies} />
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
