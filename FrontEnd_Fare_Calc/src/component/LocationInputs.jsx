import React, { useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

function LocationInputs({ pickupRef, dropRef, onRoute }) {
  return (
    <div className="input-box-container">
      <Autocomplete>
        <input
          type="text"
          placeholder="Enter Pickup Location"
          ref={pickupRef}
          className="input-box"
        />
      </Autocomplete>

      <Autocomplete>
        <input
          type="text"
          placeholder="Enter Drop Location"
          ref={dropRef}
          className="input-box"
        />
      </Autocomplete>

      <button className="btn" onClick={onRoute}>
        Show Route
      </button>
    </div>
  );
}

export default LocationInputs;
