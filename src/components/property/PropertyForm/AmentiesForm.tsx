import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

interface Section {
  title: string;
  items: string[];
}

export default function AmenitiesForm({
  selectedAmenities,
  setSelectedAmenities,
}: {
  selectedAmenities: Record<string, string[]>;
  setSelectedAmenities: React.Dispatch<
    React.SetStateAction<Record<string, string[]>>
  >;
}) {
  const sections: Section[] = [
    {
      title: "Interior Details",

      items: ["Equipped Kitchen", "Gym", "Laundry", "Media Room"],
    },

    {
      title: "Outdoor Details",

      items: [
        "Back yard",

        "Basketball court",

        "Front yard",

        "Garage Attached",

        "Hot Bath",

        "Pool",
      ],
    },

    {
      title: "Utilities",

      items: [
        "Central Air",

        "Electricity",

        "Heating",

        "Natural Gas",

        "Ventilation",

        "Water",
      ],
    },

    {
      title: "Other Features",

      items: [
        "Chair Accessible",

        "Elevator",

        "Fireplace",

        "Smoke detectors",

        "Washer and dryer",

        "WiFi",
      ],
    },
  ];

  const handleCheckboxChange = (title: string, item: string) => {
    setSelectedAmenities((prevSelectedItems) => {
      console.log(prevSelectedItems);
      const existingItems = prevSelectedItems[title] || [];

      return {
        ...prevSelectedItems,
        [title]: existingItems.includes(item)
          ? existingItems.filter((i) => i !== item)
          : [...existingItems, item],
      };
    });
  };

  return (
    <div className="container mx-auto p-4">
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="font-semibold mb-2">{section.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Checkbox
                  id={`${section.title}-${item}`}
                  onClick={() => handleCheckboxChange(section.title, item)}
                />
                <label htmlFor={`${section.title}-${item}`}>{item}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
