// components/Search.tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import mapboxgl from 'mapbox-gl';

interface SearchProps {
  onSearch: (searchParams: { city: string; location: { lat: number; lng: number } | '' }) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [cities, setCities] = useState<string[]>([]);
  const [addresses, setAddresses] = useState<string[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch('http://localhost:443/api/property/cities');
      const data = await response.json();
      setCities(data.cities);
    };

    fetchCities();
  }, []);

  const handleCityChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    onSearch({ city: selectedCity, location: '' });
    const response = await fetch('http://localhost:443/api/property/findAddressesByCity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city: selectedCity }),
    });
    const data = await response.json();
    setAddresses(data.addresses);
  };

  const handleAddressChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAddress = e.target.value;
    setAddress(selectedAddress);
    if (selectedAddress) {
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${selectedAddress}.json?access_token=${mapboxgl.accessToken}`);
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        onSearch({ city, location: { lat, lng } }); // Pass lat and lng in location object
      }
    }
  };

  return (
    <div className="absolute top-0 left-0 m-4 p-4 bg-white rounded shadow-lg z-10 w-full max-w-md">
    <select value={city} onChange={handleCityChange} className="block w-full p-2 border rounded mb-4">
      <option value="">Select city</option>
      {cities?.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
    {city && (
      <select value={address} onChange={handleAddressChange} className="block w-full p-2 border rounded">
        <option value="">Select address</option>
        {addresses?.map((address) => (
          <option key={address} value={address}>
            {address}
          </option>
        ))}
      </select>
    )}
  </div>
  );
};

export default Search;
