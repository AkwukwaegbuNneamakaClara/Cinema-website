import React from 'react';

function BookingSummary({ selectedSeats }) {
  // Calculate the total price based on the number of visitors and their age
  // You can define your own pricing logic here based on your requirements
  const calculateTotalPrice = () => {
    // Replace the dummy pricing logic with your actual pricing logic
    const basePrice = 85; // Base price for a ticket
    const seniorPrice = 75; // Price for seniors (above the age of 65)
    const childPrice = 65; // Price for children (under the age of 12)

    const totalPrice = selectedSeats.reduce((total, seat) => {
      // Replace the dummy age logic with your actual age logic
      const age = seat.charAt(0) === 'A' ? 'adult' : 'child'; // Assuming 'A' is adult and 'C' is child
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
