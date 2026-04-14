"use client";

import { useEffect } from "react";
import { getLocation } from "@/public/location";

export default function Page() {

    useEffect(() => {
        getLocation(
            (position: GeolocationPosition) => {
                console.log("Lat:", position.coords.latitude);
                console.log("Lng:", position.coords.longitude);
            },
            (error: GeolocationPositionError) => {
                console.log("Error:", error.message);
            }
        );
    }, []);

    return (
        <div>
            <h1>User Location</h1>
        </div>
    );
}