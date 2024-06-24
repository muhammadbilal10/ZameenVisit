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
import { Property } from "@/types/Property";
import { LocationSearch } from "@/components/common/LocationSearch";
import { useRouter } from "next/navigation";
import { format } from "path";
import { formatCurrency, formatNumber } from "@/constants";

const mapboxToken = base.MAP_TOKEN;
const CURRENT_LOCATION = {
  latitude: 31.42212,
  longitude: 73.090665,
};

type Location = {
  city: string;
  address: string;
  geo: {
    lat: number;
    lng: number;
  };
};

export default function PlotFinderMap({
  propertyList,
}: {
  propertyList: Property[];
}) {
  const [selectedMarker, setSelectedMarker] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [location, setLocation] = useState<Location>({
    address: "",
    city: "",
    geo: {
      lat: 31.5204,
      lng: 74.3587,
    },
  });

  const [viewState, setViewState] = useState({
    latitude: propertyList[0]?.location?.geo?.lat || 35.668641,
    longitude: propertyList[0]?.location?.geo?.lng || 139.750567,
    zoom: 10,
  });

  const router = useRouter();

  const handleMarkerClick = (e: any, property: Property) => {
    e.stopPropagation();
    setSelectedMarker(!selectedMarker);
    setSelectedProperty(property);
    console.log(selectedMarker);
  };

  useEffect(() => {
    if (location.address) {
      router.replace(`/plot-finder?location=${location.address}`);
      setViewState({
        latitude: location?.geo?.lat || 35.668641,
        longitude: location?.geo?.lng || 139.750567,
        zoom: 10,
      });
    }
  }, [location]);

  return (
    <main className="w-full h-screen">
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        maxZoom={20}
        minZoom={3}
      >
        <div className="absolute z-10 right-[5%] top-2">
          <LocationSearch location={location} setLocation={setLocation} />
        </div>
        {selectedMarker && (
          <Popup
            offset={25}
            longitude={selectedProperty?.location?.geo?.lng || 0}
            latitude={selectedProperty?.location?.geo?.lat || 0}
            onClose={() => setSelectedMarker(!selectedMarker)}
          >
            <div className="relative">
              <Image
                src={selectedProperty?.imageUrl[0] || ""}
                alt="Property Image"
                width={600}
                height={200}
                className="rounded-lg w-full h-52 gap-4"
              />
              <h1 className="text-lg font-bold mt-2">
                PKR {formatCurrency(selectedProperty?.price || 0)}
              </h1>
              <p>{selectedProperty?.location?.address}</p>
            </div>
          </Popup>
        )}
        {propertyList.map((property) => (
          <Marker
            key={property.id}
            longitude={property.location?.geo?.lng}
            latitude={property.location?.geo?.lat}
          >
            <button onClick={(e) => handleMarkerClick(e, property)}>
              {/* <Home size={20} color="tomato" /> */}
              <div className="bg-black rounded-full h-4 w-4"></div>
            </button>
          </Marker>
        ))}
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
    </main>
  );
}
