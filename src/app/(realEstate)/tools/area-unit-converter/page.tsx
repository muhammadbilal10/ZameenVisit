import AreaUnitConvert from "@/components/features/tools/AreaUnitConverter";
import LandRecords from "@/components/features/tools/LandRecordCard";
import ToolHeaderCard from "@/components/features/tools/ToolHeaderCard";
import React from "react";

export default function AreaUnitConverterPage() {
  return (
    <div>
      <ToolHeaderCard
        image="https://res.cloudinary.com/dosndnyp5/image/upload/v1717928406/area-unit-calculator_apmnik.jpg"
        title=" Area Unit Converter"
        description=" Meet the Zameen Visit Area Unit Converter—your go-to tool for
            effortlessly converting any area measurement unit for better
            clarity."
      />
      <div className="container mx-auto my-10">
        <AreaUnitConvert />
      </div>
    </div>
  );
}
