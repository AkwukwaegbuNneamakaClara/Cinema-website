import React from 'react';

function BookingSummary({ selectedSeats }) {
 
  const calculateTotalPrice = () => {
    
    const basePrice = 85; 
    const seniorPrice = 75; // Price for seniors (above the age of 65)
    const childPrice = 65; // Price for children (under the age of 12)

    const totalPrice = selectedSeats.reduce((total, seat) => {
      
      const age = seat.charAt(0) === 'A' ? 'adult' : 'child'; 
      const price = age === 'adult' ? basePrice : age === 'senior' ? seniorPrice : childPrice;
      return total + price;
    }, 0);

    return totalPrice;
  };

  return (
    <div className="booking-summary">
      <h3>Booking Summary</h3>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Total Price: SEK {calculateTotalPrice()}</p>
    </div>
  );
}

export default BookingSummary;
