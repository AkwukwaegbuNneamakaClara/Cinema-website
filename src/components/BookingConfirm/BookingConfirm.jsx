import React from 'react';
import './BookingConfirm.css'; // Import the BookingConfirmation.css file

function BookingConfirm({ bookingInfo }) {
  // Destructure the bookingInfo object to get individual details
  const { totalPrice, date, time, seatNumbers, bookingNumber } = bookingInfo;

  return (
    <div className="booking-confirm">
      <h2>Booking Confirm</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Seat Numbers: {seatNumbers.join(', ')}</p>
      <p>Total Price: SEK {totalPrice}</p>
      <p>Booking Number: {bookingNumber}</p>
      {/* Add any additional booking details as needed */}
    </div>
  );
}

export default BookingConfirm;
