import React from "react";

export default function CabForm({ distance }) {
  const perKmRate = 12; // rate per km
  const fare = (distance / 1000) * perKmRate;

  return (
    <div className="cab-form-container">

      <div className="cab-form">
    
        <label htmlFor="cab_type"> Select Cab Type : </label>

        <select name="cab" id="">
          <option value="car">Auto (10rs/km)</option>
          <option value="car">Car Mini (13rs/km)</option>
          <option value="car">Car Sedan (17rs/km)</option>
          <option value="car">Car XL (20rs/km)</option>
        </select>

        <p> Total Distance: <input type="number" name="distance" /> </p>
        <p> Total Passengers : <input type="number" name="passengers" /> </p>

        <button type="button" className="claculatebtn">Claculate Fare</button>
      </div>
    </div>
  );
}
