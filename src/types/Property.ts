export interface Property {
  id: string;
  title: string;
  description: string;
  purpose: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  areaSize: {
    size: number;
    unit: string;
  };
  builtYear: number;
  imageUrl: string[];
  videoUrl: string[];
  location: {
    address: string;
    city: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  features: string[];
  propertyType: string;
  status: string;
  user: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}
