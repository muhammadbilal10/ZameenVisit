// components/LandRecords.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// export default function LandRecords() {
//   return (
//     // <div className="min-h-screen flex flex-col items-center bg-green-50 p-8">
//     //   <h1 className="text-3xl font-bold mb-4">Zameen Land Records</h1>
//     //   <p className="text-center text-lg mb-8">
//     //     Providing you with an all-inclusive platform to help you get verified
//     //     property details with digital convenience
//     //   </p>
//     //   <div className="flex flex-col md:flex-row gap-8">
//     //     <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-72">
//     //       <h2 className="text-xl font-semibold mb-2">Punjab</h2>
//     //       <p className="text-center mb-4">
//     //         Get verified land record details via Punjab Land Record Authority
//     //         (PLRA)
//     //       </p>
//     //       <a
//     //         href="https://onlinefard.punjab-zameen.gov.pk/"
//     //         className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
//     //       >
//     //         Punjab Land Records
//     //       </a>
//     //       <img
//     //         src="https://i.postimg.cc/vmCdHFmW/minar-e-pakistan-3337034-1280-removebg-preview.png"
//     //         alt="Punjab Landmark"
//     //         className="mt-auto"
//     //       />
//     //     </div>
//     //     <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-72">
//     //       <h2 className="text-xl font-semibold mb-2">Sindh</h2>
//     //       <p className="text-center mb-4">
//     //         Acquire certified land record details via the Sindh Board of Revenue
//     //         (BoR)
//     //       </p>
//     //       <a
//     //         href="https://sindhzameen.gos.pk/SearchCNIC.aspx"
//     //         className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
//     //       >
//     //         Sindh Land Records
//     //       </a>
//     //       <img
//     //         src="https://i.postimg.cc/qRgdpB0B/mizar-quaid-3294731-1280-removebg-preview.png"
//     //         alt="Sindh Landmark"
//     //         className="mt-auto"
//     //       />
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="leading-normal tracking-normal">
//       <header
//         className="relative bg-cover bg-center h-96"
//         style={{
//           backgroundImage:
//             "url(https://lasvegas.wpresidence.net/wp-content/uploads/2022/03/house_png_2-e1646989822282.png)",
//         }}
//       >
//         <div className="absolute inset-0 bg-primary opacity-50"></div>
//         <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white text-center">
//           <h1 className="text-4xl font-bold">Zameen Land Records</h1>
//           <p className="text-xl mt-2">
//             Providing you with an all-inclusive platform to help you get
//             verified property details with digital convenience
//           </p>
//         </div>
//       </header>

//       {/* Main Section */}
//       <main className="container mx-auto my-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <LandRecordCard
//             region="Punjab"
//             description="Get verified land record details via Punjab Land Record Authority (PLRA)"
//             linkText="Punjab Land Records"
//             imageUrl="https://i.postimg.cc/qRgdpB0B/mizar-quaid-3294731-1280-removebg-preview.png"
//             linkUrl="#"
//           />
//           <LandRecordCard
//             region="Sindh"
//             description="Acquire certified land record details via the Sindh Board of Revenue (BoR)"
//             linkText="Sindh Land Records"
//             imageUrl="https://i.postimg.cc/vmCdHFmW/minar-e-pakistan-3337034-1280-removebg-preview.png"
//             linkUrl="#"
//           />
//         </div>
//       </main>
//     </div>
//   );
// }

export default function LandRecordCard({
  region,
  description,
  linkText,
  imageUrl,
  linkUrl,
}: {
  region: string;
  description: string;
  linkText: string;
  imageUrl: string;
  linkUrl: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{region}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <Image
          src={imageUrl}
          alt={`${region} Image`}
          width={96}
          height={96}
          className="w-24 h-24 object-cover rounded-full"
        />
        <Button asChild>
          <Link href={linkUrl}>{linkText}</Link>
        </Button>
      </div>
    </div>
  );
}
