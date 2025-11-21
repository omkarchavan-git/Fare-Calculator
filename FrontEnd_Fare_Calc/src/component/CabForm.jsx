import React, { useState } from "react";

function FareCalculator() {
  const [distance, setDistance] = useState("");
  const [passengers, setPassengers] = useState("");
  const [cabType, setCabType] = useState("Mini");
  const [result, setResult] = useState(null);

  const calculateFare = async () => {
    const requestBody = {
      totalKm: distance,
      totalPassenger: passengers,
      cabType: cabType
    };

    try {
      const response = await fetch("http://localhost:8080/calcFare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      setResult(data);   // ⬅️ This updates UI
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <label>Select Cab Type:</label>
      <select value={cabType} onChange={(e) => setCabType(e.target.value)}>
        <option value="Mini">Car Mini (13rs/km)</option>
        <option value="Sedan">Sedan (15rs/km)</option>
        <option value="SUV">SUV (18rs/km)</option>
      </select>

      <br />

      <label>Total Distance (KM):</label>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />

      <br />

      <label>Total Passengers:</label>
      <input
        type="number"
        value={passengers}
        onChange={(e) => setPassengers(e.target.value)}
      />

      <br />

      <button onClick={calculateFare}>Calculate Fare</button>

      {result && (
        <div>
          <h3>Fare Calculation Result</h3>
          <p><b>Total Fare: ₹{result.totalFare}</b></p>
          <p><b>Shared Fare: ₹{result.sharedFare}</b></p>
          <p><b>Total KM: {result.totalKm}</b></p>
          <p><b>Total Passengers: {result.totalPassenger}</b></p>
        </div>
      )}
    </div>
  );
}

export default FareCalculator;
