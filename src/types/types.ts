// types.ts
export interface GeoLocation {
    lng: number;
    lat: number;
  }
  
  export interface Property {
    location: {
      geo: GeoLocation;
    };
    areaSize: {
      size: number;
      unit: string;
    };
    title: string;
    description: string;
  }
  