
import React, { useState} from 'react';
import {useParams } from 'react-router-dom'; 
import './BookingPage.css'; 
import SeatLayout from '../SeatLayout/SeatLayout'; 
import sampleMovies from '../sampleMovieData'; 
import BookingSummary from '../BookingConfirm/BookingSummary'; 
import { Link } from 'react-router-dom';
import BookingConfirm from '../BookingConfirm/BookingConfirm'; 

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
  const [sampleScreeningListData] = useState([]);
  
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
   


  
  const auditoriumLayout = [
    // An array representing each row of seats
    ['71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
    ['61', '62', '63', '64', '65', '66', '67', '68', '69', '70'],
    ['51', '52', '53', '54', '55', '56', '57', '58', '59', '60'],
    ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50'],
    ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
    ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    
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
   
    //console.log('Booking completed!', selectedSeats);
    alert(`Booking completed! Selected Seats: ${selectedSeats.join(', ')}`);
  
    // For this example, we will just set the booking info state
    const totalPrice = calculateTotalPrice();
    const bookingNumber = generateBookingNumber();
    const bookingData = {
      totalPrice: totalPrice,
      date: '2023-08-2',
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
