import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import BookingPage from './components/BookingPage/BookingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/booking/:id" component={BookingPage} />
        {/* Add more routes for other pages if needed */}
      </Switch>
    </Router>
  );
}

export default App;
