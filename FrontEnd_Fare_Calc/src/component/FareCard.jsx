import React from "react";

function FareCard({ cabType, distance, duration, fare }) {
  return (
    <div className="fare-card">
      <h3>Ride Summary</h3>

      <p><b>Cab Type:</b> {cabType}</p>
      <p><b>Distance:</b> {distance}</p>
      <p><b>Duration:</b> {duration}</p>

      <h2>Total Fare: ₹{fare}</h2>
    </div>
  );
}

export default FareCard;