import { MapContainer, TileLayer, Marker, Polyline, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// CUSTOM PICKUP MARKER
const pickupIcon = L.divIcon({
    className: "pickup-icon",
    html: `<div style="
            width: 16px;
            height: 16px;
            background: #ff5722;
            border-radius: 50%;
            border: 2px solid white;
        "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
});

// CUSTOM DROP MARKER
const dropIcon = L.divIcon({
    className: "drop-icon",
    html: `<div style="
            width: 16px;
            height: 16px;
            background: #2196f3;
            border-radius: 50%;
            border: 2px solid white;
        "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
});

// CLICK HANDLER
function LocationPicker({ setPickup, setDrop }) {
    useMapEvents({
        click(e) {
            if (!setPickup.isSet) {
                setPickup(e.latlng);
                setPickup.isSet = true;
            } else {
                setDrop(e.latlng);
            }
        }
    });
    return null;
}

export default function MapComponent({ pickup, setPickup, drop, setDrop, route }) {
    return (
        <MapContainer center={[19.0760, 72.8777]} zoom={12} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <LocationPicker setPickup={setPickup} setDrop={setDrop} />

            {pickup && <Marker position={pickup} icon={pickupIcon} />}
            {drop && <Marker position={drop} icon={dropIcon} />}

            {route.length > 0 && <Polyline positions={route} />}
        </MapContainer>
    );
}
