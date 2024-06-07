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
            {/* <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-cover bg-center h-56">
                <Image
                  src="/images/central-park.jpg"
                  alt="Central Park"
                  width={500}
                  height={300}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Central Park
                </h2>
                <p className="text-gray-600 mt-2">New York, NY, USA</p>
                <div className="flex items-center mt-3 text-gray-600">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <h3 className="px-2 text-sm">Open 24 hours</h3>
                </div>
                <div className="flex items-center mt-3 text-gray-600">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <h3 className="px-2 text-sm">info@centralparknyc.org</h3>
                </div>
                <div className="mt-4">
                  <a
                    href="https://goo.gl/maps/xXW5n7Kr4cF2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div> */}
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
