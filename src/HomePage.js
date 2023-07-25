import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './components/Title/Title'; // Adjust the import path

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingPage from './components/BookingPage';

function HomePage() {
  return (
    <Router>
      <div>
        <Title /> {/* This line includes the Title component */}
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/booking/:id" component={BookingPage} />
          {/* Add more routes for other pages if needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;
