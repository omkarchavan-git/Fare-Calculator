import React, { useState } from "react";

export default function CabForm() {
  const [form, setForm] = useState({
    cabType: "",
    totalKm: "",
    totalPassenger: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.cabType || !form.totalKm || !form.totalPassenger) {
      alert("Please fill all fields");
      return;
    }

    const response = await fetch("http://localhost:8081/formfare/addData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    setResult(data); // store backend calculated result
  };

  return (
    <div className="cab-form-container">
      <div className="cab-form">

        <label>Select Cab Type:</label>
        <select name="cabType" onChange={handleChange}>
          <option value="">--select--</option>
          <option value="Auto">Auto (10rs/km)</option>
          <option value="Car Mini">Car Mini (13rs/km)</option>
          <option value="Car Sedan">Car Sedan (17rs/km)</option>
          <option value="Car XL">Car XL (20rs/km)</option>
        </select>

        <p>
          Total Distance (KM):
          <input
            type="number"
            name="totalKm"
            value={form.totalKm}
            onChange={handleChange}
          />
        </p>

        <p>
          Total Passengers:
          <input
            type="number"
            name="totalPassenger"
            value={form.totalPassenger}
            onChange={handleChange}
          />
        </p>

        <button type="button" onClick={handleSubmit}>
          Calculate Fare
        </button>

        {/* ------- SHOW RESULT BELOW -------- */}
        {result && (
          <div className="result-box">
            <h3>Fare Calculation Result</h3>
            <p><strong>Total Fare:</strong> ₹{result.totalFare}</p>
            <p><strong>Shared Fare:</strong> ₹{result.sharedFare}</p>
            <p><strong>Total KM:</strong> {result.totalKm}</p>
            <p><strong>Total Passengers:</strong> {result.totalPassenger}</p>
          </div>
        )}

      </div>
    </div>
  );
}
