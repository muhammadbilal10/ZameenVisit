export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string[];
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  features: string[];
  propertyType: "house" | "apartment" | "condo";
  status: "for-sale" | "sold" | "pending";
}
