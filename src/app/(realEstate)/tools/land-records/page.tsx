import LandRecordCard from "@/components/features/tools/LandRecordCard";
import LandRecords from "@/components/features/tools/LandRecordCard";
import ToolHeaderCard from "@/components/features/tools/ToolHeaderCard";
import Image from "next/image";
import React from "react";

const ABOUT_LAND_RECORDS = [
  {
    title: "All Records on Transfer of Land",
    description:
      "Save yourself from the hassle of traditional methods. Book an appointment and get your Fards and Mutation in a digital format.",
  },
  {
    title: "Location & Addresses of Properties",
    description:
      "Find all the relevant details of any property's location, with its complete official address, including information such as tehsil, district, and tasla etc.",
  },
  {
    title: "All Records of Ownership",
    description:
      "Check out all the ownership information of any property unit for transparent transactions, including possession history.",
  },
];

export default function LandsRecordPage() {
  return (
    <div className="">
      <ToolHeaderCard
        image="https://lasvegas.wpresidence.net/wp-content/uploads/2022/03/house_png_2-e1646989822282.png"
        title="Zameen Land Records"
        description=" Providing you with an all-inclusive platform to help you get verified
          property details with digital convenience"
      />
      <main className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <LandRecordCard
            region="Punjab"
            description="Get verified land record details via Punjab Land Record Authority (PLRA)"
            linkText="Punjab Land Records"
            imageUrl="https://i.postimg.cc/qRgdpB0B/mizar-quaid-3294731-1280-removebg-preview.png"
            linkUrl="#"
          />
          <LandRecordCard
            region="Sindh"
            description="Acquire certified land record details via the Sindh Board of Revenue (BoR)"
            linkText="Sindh Land Records"
            imageUrl="https://i.postimg.cc/vmCdHFmW/minar-e-pakistan-3337034-1280-removebg-preview.png"
            linkUrl="#"
          />
        </div>
        {/* About Land record */}
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:mt-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              About Land Records
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mt-10 mx-auto">
            {ABOUT_LAND_RECORDS.map((record, idx) => (
              <div key={idx} className="mt-12">
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {record.title}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  {record.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
