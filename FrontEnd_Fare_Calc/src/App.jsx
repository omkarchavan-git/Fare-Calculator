import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import CabForm from "./component/CabForm";
import FareCard from "./component/FareCard";
import Home from "./component/Home";

// CUSTOM MARKER (no PNG needed)
const customMarker = L.divIcon({
  className: "custom-marker",
  html: `<div style="
        width: 18px;
        height: 18px;
        background: #ff5722;
        border: 2px solid white;
        border-radius: 50%;
      "></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function App() {
  return (
    <div className="container">
      
      <Home/>
     
    </div>
  );
}

export default App;