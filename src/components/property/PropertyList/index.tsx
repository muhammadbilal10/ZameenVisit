import PropertyCard from "./PropertyCard";

type Property = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  location: string;
  noOfBedrooms: number;
  noOfBathrooms: number;
  area: string;
  agentInfo: {
    name: string;
    phone: string;
    email: string;
  };
};

type PropertyListProps = {
  properties: Property[];
};

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="">
      <h2 className="ml-4 mt-10 mb-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight">
        Disocover latest properties
      </h2>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))} */}
      </div>
    </div>
  );
};

export default PropertyList;
