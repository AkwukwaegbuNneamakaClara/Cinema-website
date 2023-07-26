import React, { useState } from 'react';
import './BookingPage.css'; // Import the BookingPage.css file
import SeatLayout from './SaetLayout/SeatLayout'; // Import the SeatLayout component

function BookingPage() {
  // State to store the selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Sample auditorium seat layout (you can customize this based on your needs)
  const auditoriumLayout = [
    // An array representing each row of seats
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['C1', 'C2', 'C3', 'C4', 'C5'],
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

 /* return (
    <div className="booking-page">
      <h2>Choose Your Seats</h2>
      <div className="auditorium-layout">
        {auditoriumLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seat) => (
              <div
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                onClick={() => handleSeatSelect(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <p>{selectedSeats.join(', ')}</p>
      </div>
      //{ Add a button to complete the booking }
      <button>Complete Booking</button>
    </div>
  );*/
  return (
    <div className="booking-page">
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
    </div>
  );
}

export default BookingPage;
