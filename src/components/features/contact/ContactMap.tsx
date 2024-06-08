"use client";

import Map, {
  NavigationControl,
  GeolocateControl,
  Marker,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { base } from "@/utils/config";
import { Clock, Home, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import MapContactCard from "./MapContactCard";

const mapboxToken = base.MAP_TOKEN;
const CURRENT_LOCATION = {
  latitude: 35.668641,
  longitude: 139.750567,
};

export default function ContactMap() {
  const [selectedMarker, setSelectedMarker] = useState(true);

  const handleMarkerClick = (e: any) => {
    e.stopPropagation();
    setSelectedMarker(!selectedMarker);
    console.log(selectedMarker);
  };

  return (
    <main className="w-full h-[450px]">
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        initialViewState={{
          latitude: CURRENT_LOCATION.latitude,
          longitude: CURRENT_LOCATION.longitude,
          zoom: 10,
        }}
        maxZoom={20}
        minZoom={3}
      >
        {selectedMarker && (
          <div className="absolute sm:top-8  top-28 left-[20px] sm:left-[120px]">
            <MapContactCard />
          </div>
        )}
        {false && (
          <Popup
            offset={25}
            longitude={CURRENT_LOCATION.longitude}
            latitude={CURRENT_LOCATION.latitude}
            onClose={() => setSelectedMarker(!selectedMarker)}
          >
            <div className="relative">
              <p>
                <Mail size={20} color="tomato" />
              </p>
              <div className="absolute -bottom-20 bg-white p-4 text-2xl shadow-lg">
                hello
              </div>
            </div>
          </Popup>
        )}
        <Marker longitude={139.750567} latitude={35.668641}>
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleMarkerClick}
          >
            {<Home size={30} color="tomato" />}
          </button>
        </Marker>
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
    </main>
  );
}
