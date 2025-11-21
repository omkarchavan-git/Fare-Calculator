import React, { useState } from "react";

export default function CabForm({ distance }) {
  const [form, setForm] = useState({
    cabType: "",
    totalKm: "",
    totalPassenger: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8081/formfare/addData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    console.log("Saved:", data);
    alert("Data saved successfully!");
  };

  return (
    <div className="cab-form-container">
      <div className="cab-form">

        <label htmlFor="cabType"> Select Cab Type : </label>
        <select name="cabType" onChange={handleChange}>
          <option value="">--select--</option>
          <option value="Auto">Auto (10rs/km)</option>
          <option value="Car Mini">Car Mini (13rs/km)</option>
          <option value="Car Sedan">Car Sedan (17rs/km)</option>
          <option value="Car XL">Car XL (20rs/km)</option>
        </select>

        <p>
          Total Distance:
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

        <button type="button" className="calculatebtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
