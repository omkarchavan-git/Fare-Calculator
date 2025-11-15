import React, { useState } from "react";
import MapComponent from "../component/MapComponent";
import CabForm from "./CabForm";
import FareCard from "./FareCard";

export default function Home() {
    const [pickup, setPickup] = useState(null);
    const [drop, setDrop] = useState(null);
    const [route, setRoute] = useState([]);
    const [distance, setDistance] = useState(0);

    async function calculateRoute() {
        if (!pickup || !drop) return;

        const res = await fetch(
            `https://api.openrouteservice.org/v2/directions/driving-car?api_key=YOUR_ORS_KEY&start=${pickup.lng},${pickup.lat}&end=${drop.lng},${drop.lat}`
        );

        const data = await res.json();
        const coords = data.features[0].geometry.coordinates.map((c) => [c[1], c[0]]);
        setRoute(coords);

        setDistance(data.features[0].properties.summary.distance);
    }

    return (
        <>
            <h1 className="header-title">🚕 Cab Fare Calculator</h1>

            <div className="container">

                <CabForm />
                {/* <FareCard /> */}
            </div>
        </>
    );
}
