//import React from 'react';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'; // Import the useParams hook
import './BookingPage.css'; // Import the BookingPage.css file
import SeatLayout from '../SeatLayout/SeatLayout'; // Import the SeatLayout component
import sampleMovies from '../sampleMovieData'; // Import the sampleMovies data
import BookingSummary from '../BookingConfirm/BookingSummary'; // Import the BookingSummary component
import { Link } from 'react-router-dom';
import BookingConfirm from '../BookingConfirm/BookingConfirm'; // Import the BookingConfirmation component
import { getRestData } from '../../api'; // Import the getRestData function
import ScreeningList from '../ScreeningList/ScreeningList'; // Import the ScreeningList component
import MovieDetails from '../MovieDetails/MovieDetails';
import sampleScreeningListData from '../sampleScreeningListData'; // Import the sampleScreeningListData

function BookingPage() {
  // Get the movie ID from the URL params
  const { id } = useParams();
  // Find the selected movie from the list of movies based on the ID
  const selectedMovie = sampleMovies.find((movie) => movie.id === id);
  // State to store the selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingInfo, setBookingInfo] = useState(null);

  // State to store the fetched data from the REST API
 // const [restData, setRestData] = useState(null);
  const [sampleScreeningListData, setSampleScreeningListData] = useState([]); 
  const [movie, setMovie] = useState(null);
  
  //const [movieData, setMovieData] = useState([]);
    
  // Fetch data from the REST API when the component mounts
 /* useEffect(() => {
    const fetchData = async () => {
      const data = await getRestData();
      setRestData(data);
    };
    fetchData();
  }, []);*/
  /*useEffect(() => {
    // Fetch movie data from the REST API and store it in the movieData state
    getRestData()
      .then((data) => { console.log('Fetched data:', data); // Log the fetched data to check its structure
      // Sort screenings by date for each movie
         // Sort screenings by date for each movie
      data.forEach((movie) => {
        movie.screenings.sort((a, b) => new Date(a.date) - new Date(b.date));
      });

      setSampleScreeningListData(data);
      // Set the selected movie and its screenings based on the provided ID
      const selectedMovie = data.find((movie) => movie.id === id);
      console.log('Selected movie:', selectedMovie); // Log the selected movie to check its details
      if (selectedMovie) {
        setMovie(selectedMovie);
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
    
  }, [id]);*/
  // Handle category change
  
   // Filter screenings based on the selected category
   


  // Sample auditorium seat layout (you can customize this based on your needs)
  const auditoriumLayout = [
    // An array representing each row of seats
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
    ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
    ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'],
    ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10'],
    // Add more rows as needed
  ];

  // Function to handle seat selection
  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      // If the seat is already selected, remove it from the list
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      // If the seat is not selected, add it to the list
      setSelectedSeats([...selectedSeats, seat]);
    }
  };
  // Function to handle the completion of the booking
  const handleCompleteBooking = () => {
    // Logic to complete the booking
    // For example, you can make an API call to store the booking details on the server.
    // After the successful booking, you can show a confirmation message or redirect the user to a confirmation page.
    //console.log('Booking completed!', selectedSeats);
    alert(`Booking completed! Selected Seats: ${selectedSeats.join(', ')}`);
  
    // For this example, we will just set the booking info state
    const totalPrice = calculateTotalPrice();
    const bookingNumber = generateBookingNumber();
    const bookingData = {
      totalPrice: totalPrice,
      date: '2023-07-31',
      time: '15:00',
      seatNumbers: selectedSeats,
      bookingNumber: bookingNumber,
    };
    setBookingConfirmed(true);
    setBookingInfo(bookingData);
  };
    // Function to calculate the total price based on the number of visitors and their age
    const calculateTotalPrice = () => {
      const basePrice = 85; // Base price for a ticket
      const seniorDiscount = 0.2; // 20% discount for seniors
      const childDiscount = 0.5; // 50% discount for children
    // Calculate the price for each seat based on the age category
   const seatPrices = selectedSeats.map((seat) => {
    const age = seat.charAt(0) === 'A' ? 'adult' : 'child'; // Assuming 'A' is adult and 'C' is child
    if (age === 'adult') {
      return basePrice;
    } else if (age === 'senior') {
      return basePrice * (1 - seniorDiscount);
    } else {
      return basePrice * (1 - childDiscount);
    }
  });
  
  // Calculate the total price by summing up the prices of all selected seats
  const totalPrice = seatPrices.reduce((total, price) => total + price, 0);
  
  return totalPrice;
  };
  // Function to generate a random booking number
  const generateBookingNumber = () => {
    // Your booking number generation logic here...
    // Replace this with your actual booking number generation logic
    return 'ABC123';
  };

  return (
    <div className="booking-page">

      {selectedMovie && (
        <div className="movie-details">
          <div className="poster">
            <img src={selectedMovie.poster} alt={selectedMovie.title} />
          </div>
          <div className="info">
            <h2>{selectedMovie.title}</h2>
            <p>Length: {selectedMovie.length}</p>
            {/* Add more movie details as needed */}
          </div>
        </div>
      )}
      {bookingConfirmed ? (
        // If booking is confirmed, show the BookingConfirm component with the bookingInfo
        <BookingConfirm bookingInfo={bookingInfo} />
      ) : (
        // If booking is not confirmed, show the BookingSummary component to select seats
        <BookingSummary
          selectedSeats={selectedSeats}
          onSelectSeats={handleSeatSelect}
          onCompleteBooking={handleCompleteBooking}
        />
      )}
      
      {/* Your other JSX code */}
      {sampleScreeningListData?.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          {movie.dates.map((dateEntry) => (
            <div key={dateEntry.date}>
              <p>Date: {dateEntry.date}</p>
              <p>Times: {dateEntry.times.join(', ')}</p>
            </div>
          ))}
        </div>
      ))}
     
  

      <h2>Choose Your Seats</h2>
      {/* Render the SeatLayout component with the necessary props */}
      <SeatLayout
        auditoriumLayout={auditoriumLayout}
        selectedSeats={selectedSeats}
        onSeatSelect={handleSeatSelect}
      />
      {/* Add the rest of your BookingPage content here */}
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <p>{selectedSeats.join(', ')}</p>
      </div>
      <button onClick={handleCompleteBooking}>Complete Booking</button>
      {/* Button to go back to the homepage */}
      {bookingConfirmed && (
        <Link to="/">Back to HomePage</Link>
      )}
    </div>
  );
}

export default BookingPage;
