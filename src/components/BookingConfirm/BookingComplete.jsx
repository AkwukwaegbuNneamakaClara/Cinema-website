import React, { useState } from 'react';
import BookingConfirm from './BookingConfirm';

function BookingComplete() {
  
  const [bookingInfo, setBookingInfo] = useState({
    totalPrice: 200, // Replace with the actual total price
    date: '2023-07-30', // Replace with the actual screening date
    time: '15:30', // Replace with the actual screening time
    seatNumbers: ['A1', 'A2'], // Replace with the actual booked seat numbers
    bookingNumber: 'ABC123' // Replace with the actual booking number
  });

  return (
    <div>
      {/* Render the BookingConfirmation component with the bookingInfo prop */}
      <BookingConfirm bookingInfo={bookingInfo} />
    </div>
  );
}

export default BookingComplete;
