import React, { useState } from "react";
import Map, { NavigationControl, GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { base } from "@/utils/config";
import { MapPin } from "lucide-react";

type Location = {
  city: string;
  address: string;
  geo: {
    lat: number;
    lng: number;
  };
};

export default function LocationMap({
  location,
  setLocation,
}: {
  location: Location;
  setLocation: (location: Location) => void;
}) {
  console.log(location);
  const [marker, setMarker] = useState({
    latitude: location?.geo?.lat || 35.668641,
    longitude: location?.geo?.lng || 139.750567,
  });

  const [viewState, setViewState] = useState({
    latitude: location?.geo?.lat || 35.668641,
    longitude: location?.geo?.lng || 139.750567,
    zoom: 10,
  });

  React.useEffect(() => {
    setMarker({
      latitude: location?.geo?.lat || 35.668641,
      longitude: location?.geo?.lng || 139.750567,
    });
    setViewState({
      latitude: location?.geo?.lat || 35.668641,
      longitude: location?.geo?.lng || 139.750567,
      zoom: 10,
    });
  }, [location]);

  return (
    <div className="max-w-full h-72">
      <Map
        mapboxAccessToken={base.MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{
          width: "100%",
          height: "100%",
        }}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        maxZoom={20}
        minZoom={3}
      >
        <Marker
          latitude={marker.latitude}
          longitude={marker.longitude}
          draggable
          onDragEnd={(event: any) => {
            setMarker({
              latitude: event?.lngLat?.lat,
              longitude: event?.lngLat?.lng,
            });
            setLocation({
              ...location,
              geo: {
                lat: event?.lngLat?.lat,
                lng: event?.lngLat?.lng,
              },
            });
          }}
        >
          {/* <div
            style={{ backgroundColor: "red", height: "10px", width: "10px" }}
          /> */}
          <MapPin className="h-6 w-6 " />
        </Marker>
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}
