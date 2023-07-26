import React from 'react';
import './Seat.css'; // Import the SeatComponent.css file

function SeatComponent({ seat, status, onSeatClick }) {
  // Function to handle seat click
  const handleClick = () => {
    onSeatClick(seat);
  };

  return (
    <div
      className={`seat ${status === 'booked' ? 'booked' : status === 'selected' ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {seat}
    </div>
  );
}

export default Seat;
