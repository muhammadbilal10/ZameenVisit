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
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

// "use client";
// import React, { useState } from "react";
// import PropertyCard from "./PropertyCard";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// type Property = {
//   id: number;
//   title: string;
//   description: string;
//   price: string;
//   image: string;
//   location: string;
//   noOfBedrooms: number;
//   noOfBathrooms: number;
//   area: string;
//   agentInfo: {
//     name: string;
//     phone: string;
//     email: string;
//   };
// };

// type PropertyListProps = {
//   properties: Property[];
// };

// const ITEMS_PER_PAGE = 4;

// const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

//   const currentProperties = properties.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <h2 className="ml-4 mt-10 mb-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight">
//         Discover latest properties
//       </h2>
//       <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {currentProperties.map((property) => (
//           <PropertyCard key={property.id} property={property} />
//         ))}
//       </div>
//       <div className="my-10">
//         <Pagination>
//           <PaginationContent>
//             {/* Render Previous Button */}
//             <PaginationItem>
//               <PaginationPrevious
//                 href="#properties"
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 aria-disabled={currentPage === 1}
//               />
//             </PaginationItem>
//             {/* Render page numbers */}
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <PaginationItem key={page}>
//                 <PaginationLink
//                   href="#properties"
//                   isActive={page === currentPage}
//                   onClick={() => handlePageChange(page)}
//                 >
//                   {page}
//                 </PaginationLink>
//               </PaginationItem>
//             ))}
//             {/* Render Next Button */}
//             <PaginationItem>
//               <PaginationNext
//                 href="#properties"
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 aria-disabled={currentPage === totalPages}
//               />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </div>
//     </div>
//   );
// };

// export default PropertyList;
