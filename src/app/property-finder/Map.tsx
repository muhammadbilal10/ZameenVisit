import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Image from 'next/image';

mapboxgl.accessToken = 'pk.eyJ1IjoiemVlZTk5IiwiYSI6ImNsd3Rqc2ZzNzAzeHYyb3IxMm9xanFrdGwifQ.rTUqcwbx5ehH3YvrizHfug';

const unitConversionFactors: { [key: string]: number } = {
  Marla: 25.2929,
  Kanal: 505.857,
  'Square Feet': 0.092903,
  'Square Yards': 0.836127,
  'Square Meters': 1,
};

const convertToSquareMeters = (size: number, unit: string) => {
  return size * (unitConversionFactors[unit] || 1);
};

interface Property {
  location: {
    geo: {
      lng: number;
      lat: number;
    };
  };
  areaSize: {
    size: number;
    unit: string;
  };
  title: string;
  description: string;
  imageUrl: string[];
  price: number;
}

interface MapProps {
  properties: Property[];
  city: string;
  location: {
    lng: number;
    lat: number;
  } | null;
  loading: boolean;
}

const Map: React.FC<MapProps> = ({ properties, city, location, loading }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainerRef }: { setMap: any; mapContainerRef: React.RefObject<HTMLDivElement> }) => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current as HTMLElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [73.0528, 33.5969],
        zoom: 5,
      });

      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          countries: 'pk',
          placeholder: 'Search for addresses in Pakistan',
        })
      );

      map.on('load', () => {
        setMap(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainerRef });

    return () => map && map.remove();
  }, [map]);

  useEffect(() => {
    if (map && !loading) {
      const setMarkers = (properties: Property[]) => {
        properties?.forEach((property) => {
          const markerElement = document.createElement('div');
          markerElement.className = 'property-marker';
          markerElement.style.backgroundImage = 'url("https://i.postimg.cc/MGrG943T/Nice-Png-insurance-icon-png-8250287.png")';
          markerElement.style.width = '35px';
          markerElement.style.height = '45px';
          markerElement.style.backgroundSize = 'contain';
          markerElement.style.cursor = 'pointer';
          markerElement.style.borderRadius = '5px';
        
          
          const priceLabel = document.createElement('div');
          priceLabel.className = 'price-label';
          priceLabel.innerText = `PKR ${formatPrice(property.price)}`;
          priceLabel.style.position = 'absolute';
          priceLabel.style.bottom = '50px';
          priceLabel.style.left = '50%';
          priceLabel.style.transform = 'translateX(-50%)';
          priceLabel.style.backgroundColor = '#000';
          priceLabel.style.padding = '5px 5px';
          priceLabel.style.borderRadius = '5px';
          priceLabel.style.fontSize = '11px';
          priceLabel.style.fontWeight = 'bold';
          priceLabel.style.color = '#fff';
       
          
          markerElement.appendChild(priceLabel);

          const marker = new mapboxgl.Marker(markerElement)
            .setLngLat([property.location.geo.lng, property.location.geo.lat])
            .addTo(map)
            .getElement().addEventListener('click', (e) => {
              e.stopPropagation();
              setSelectedProperty(property);
              map.flyTo({
                center: [property.location.geo.lng, property.location.geo.lat],
                zoom: 15,
                speed: 1,
              });
            });
        });

        map.on('click', () => {
          setSelectedProperty(null);
        });
      };

      setMarkers(properties);
    }
  }, [map, properties, loading]);

  useEffect(() => {
    if (city && map) {
      const geocodeCity = async () => {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxgl.accessToken}`);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;
          map.flyTo({
            center: [lng, lat],
            zoom: 12,
            speed: 1,
          });
        }
      };
      geocodeCity();
    }
  }, [city, map]);

  useEffect(() => {
    if (selectedProperty && map) {
      const areaInSqMeters = convertToSquareMeters(selectedProperty.areaSize.size, selectedProperty.areaSize.unit);
      const sideLength = Math.sqrt(areaInSqMeters);
      const halfSideLength = sideLength / 2;

      const coordinates = createSquare(
        selectedProperty.location.geo.lng,
        selectedProperty.location.geo.lat,
        halfSideLength
      );

      if (map?.getSource('property-highlight')) {
        map?.getSource('property-highlight')?.setData({
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [coordinates],
          },
        });
      } else {
        map?.addSource('property-highlight', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [coordinates],
            },
          },
        });
        map?.addLayer({
          id: 'property-highlight-layer',
          type: 'fill',
          source: 'property-highlight',
          paint: {
            'fill-color': '#ffff00',
            'fill-opacity': 0.5,
            'fill-outline-color': '#ff0000',
          },
        });
      }
    }
  }, [selectedProperty, map]);

  const createSquare = (lng: number, lat: number, halfSideLength: number) => {
    const deltaX = halfSideLength / (111.32 * 1000 * Math.cos(lat * (Math.PI / 180)));
    const deltaY = halfSideLength / (111.32 * 1000);

    return [
      [lng - deltaX, lat - deltaY],
      [lng + deltaX, lat - deltaY],
      [lng + deltaX, lat + deltaY],
      [lng - deltaX, lat + deltaY],
      [lng - deltaX, lat - deltaY],
    ];
  };

  useEffect(() => {
    if (map && city && location?.lat && location?.lng) {
      map.flyTo({
        center: [location.lng, location.lat],
        zoom: 17,
        speed: 1,
      });
      setSelectedProperty(null);
    }
  }, [map, city, location]);

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainerRef} className="w-full h-full" />
      {selectedProperty && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg w-72 p-4">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedProperty(null)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-2">{selectedProperty.title}</h2>
            <Image
              src={selectedProperty.imageUrl[0] || ""}
              alt="Property Image"
              width={600}
              height={200}
              className="rounded-lg w-full h-52 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">PKR {selectedProperty.price}</h3>
            {/* <p className="text-gray-600">{selectedProperty.description}</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;


function formatPrice(price: number) {
    if (price >= 1e3) {
      const priceInK = price / 1e3;
      return Number.isInteger(priceInK) ? priceInK + 'K' : priceInK.toFixed(1) + 'K';
    }
    return price.toString();
  }