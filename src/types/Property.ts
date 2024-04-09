export interface Property {
  id: string;
  title: string;
  description: string;
  purpose: "sale" | "rent";
  price: number;
  bedrooms: number;
  bathrooms: number;
  areaSize: {
    size: number;
    unit: "sqft" | "marla" | "kanal";
  };
  builtYear: number;
  imageUrl: string[];
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  features: string[];
  propertyType: "House" | "Apartment" | "Condo";
  status: "for-sale" | "sold" | "pending";
}
