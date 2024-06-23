// pages/index.tsx
"use client";
import { useState, useEffect } from 'react';
import Map from '@/app/property-finder/Map';
import Search from '@/app/property-finder/Search';
import { Property, GeoLocation } from '@/types/types';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Home: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [city, setCity] = useState<string>('');
  const [location, setLocation] = useState<GeoLocation | ''>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProperties = async () => {
      const response = await fetch('https://zameen-server.onrender.com/api/property/getAllProperties');
      const data = await response.json();
      setProperties(data.properties);
      setLoading(false);
    };

    fetchAllProperties();
  }, []);

  const handleSearch = async ({ city, location }: { city: string; location: GeoLocation | '' }) => {
    setCity(city);
    setLocation(location);
    setLoading(true);
    const response = await fetch(`https://zameen-server.onrender.com/api/property/searchProperties?city=${city}&location=${location}`);
    const data = await response.json();
    setProperties(data.properties);
    setLoading(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Search onSearch={handleSearch} />
      <Map properties={properties} city={city} location={location} loading={loading} />
      
    </div>
  );
};

export default Home;
