//import React, { useState } from 'react';
import React from 'react';
import './SeatLayout.css'; // Import the SeatLayout.css file
import Seat from '../Seat/Seat'; // Import the SeatComponent


function SeatLayout({ auditoriumLayout, selectedSeats, onSeatSelect }) {
  // Function to handle seat selection
  const handleSeatSelect = (seat) => {
    onSeatSelect(seat);
  };

  return (
    <div className="seat-layout">
      {auditoriumLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat) => (
            /*<div
              key={seat}
              className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
              onClick={() => handleSeatSelect(seat)}
            >
              {seat}
            </div>*/
            <Seat
              key={seat}
              seat={seat}
              status={selectedSeats.includes(seat) ? 'selected' : 'available'}
              onSeatClick={handleSeatSelect} // Use the handleSeatSelect function to handle seat click
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SeatLayout;
