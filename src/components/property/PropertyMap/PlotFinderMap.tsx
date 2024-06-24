"use client";

import Map, {
  NavigationControl,
  GeolocateControl,
  Marker,
  Popup,
  Layer,
  Source,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { base } from "@/utils/config";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Property } from "@/types/Property";
import { LocationSearch } from "@/components/common/LocationSearch";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/constants";
import Link from "next/link";

import HomeIcon from "@/images/HomeIcon.png";

const mapboxToken = base.MAP_TOKEN;

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

  // Calculate the bounding polygon coordinates around the propertyList
  const propertyCoordinates = propertyList.map((property) => [
    property.location.geo.lng,
    property.location.geo.lat,
  ]);

  const polygonCoordinates = [
    ...propertyCoordinates,
    propertyCoordinates[0], // Closing the polygon by repeating the first point
  ];

  console.log(polygonCoordinates);

  const geoJson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [polygonCoordinates],
        },
      },
    ],
  };

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
        <Source
          id="propertyPolygon"
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Polygon",
                  coordinates: [polygonCoordinates],
                },
              },
            ],
          }}
        >
          <Layer
            id="propertyPolygonLayer"
            type="fill"
            paint={{
              "fill-color": "#088",
              "fill-opacity": 0.4,
            }}
          />
        </Source>
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
            <Link
              href={`property/${selectedProperty?.bedrooms}-${selectedProperty?.propertyType}-${selectedProperty?.location?.city}/${selectedProperty?.id}`}
              className="relative"
            >
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
            </Link>
          </Popup>
        )}
        {propertyList.map((property) => (
          <Marker
            key={property.id}
            longitude={property.location?.geo?.lng}
            latitude={property.location?.geo?.lat}
          >
            <button onClick={(e) => handleMarkerClick(e, property)}>
              <Image
                alt="HomeLocationIcon"
                src={HomeIcon}
                width={50}
                height={50}
              />
            </button>
          </Marker>
        ))}
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
    </main>
  );
}
