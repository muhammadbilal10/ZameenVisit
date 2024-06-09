"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MarlaSize {
  value: number;
  label: string;
}

const marlaSizes: MarlaSize[] = [
  { value: 225, label: "225 /Sq. ft." },
  { value: 250, label: "250 /Sq. ft." },
  { value: 272, label: "272 /Sq. ft." },
];

interface ConversionRates {
  [key: string]: number; // Index signature
}

const conversionRates: ConversionRates = {
  "Marla → Sq. yd.": 25,
  "Sq. m. → Sq. yd.": 1.2,
  "Kanal → Marla": 20,
  "Sq. ft. → Sq. m.": 0.09,
};

export default function AreaUnitConvert() {
  const [marlaSize, setMarlaSize] = useState<MarlaSize>(marlaSizes[0]);
  const [inputValue, setInputValue] = useState<number>(1);
  const [outputValue, setOutputValue] = useState<number>(marlaSize.value);
  const [inputUnit, setInputUnit] = useState<string>("Marla");
  const [outputUnit, setOutputUnit] = useState<string>("Square Feet");

  const handleMarlaSizeChange = (size: MarlaSize) => {
    setMarlaSize(size);
    setOutputValue(inputValue * size.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
    setOutputValue(Number(e.target.value) * marlaSize.value);
  };

  const handleConversion = (conversionType: string) => {
    let conversionRate = conversionRates[conversionType];
    if (conversionRate) {
      conversionRate *= marlaSize.value / 225; // Adjust the conversion rate based on the selected Marla size
      setOutputValue(inputValue * conversionRate);
      setOutputUnit(conversionType.split(" → ")[1]);
      setInputUnit(conversionType.split(" → ")[0]);
    } else {
      console.error("Unsupported conversion type:", conversionType);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">
            Area Unit Converter Tool
          </h1>
          <p className="text-center mb-8">
            Easy and convenient way to convert and compare various units of
            measurements of area sizes
          </p>

          <div className="flex justify-around mb-4">
            {marlaSizes.map((size) => (
              <Button
                key={size.value}
                variant={"secondary"}
                onClick={() => handleMarlaSizeChange(size)}
              >
                {size.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center mb-4">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="border p-2 rounded w-1/2"
            />
            <span className="ml-4">{inputUnit}</span>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="number"
              value={outputValue}
              readOnly
              className="border p-2 rounded w-1/2"
            />
            <span className="ml-4" id="output-unit">
              {outputUnit}
            </span>
          </div>

          <div className="flex flex-wrap justify-around mt-4 gap-4">
            <Button
              variant={"outline"}
              onClick={() => handleConversion("Marla → Sq. yd.")}
            >
              Marla → Sq. yd.
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleConversion("Sq. m. → Sq. yd.")}
            >
              Sq. m. → Sq. yd.
            </Button>

            <Button
              variant={"outline"}
              onClick={() => handleConversion("Kanal → Marla")}
            >
              Kanal → Marla
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleConversion("Sq. ft. → Sq. m.")}
            >
              Sq. ft. → Sq. m.
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl mt-6">
          <div className="p-6 bg-white rounded-b-lg">
            <ul className="space-y-4 text-gray-700">
              <li>
                <b>Struggling with unfamiliar area units?</b>
              </li>
              <li>
                <p>
                  Meet the Zameen Area Unit Converter—your go-to tool for
                  effortlessly converting any area measurement unit for better
                  clarity.
                </p>
              </li>
              <li>
                <b>Internationally Recognized Area Units</b>
              </li>
              <li>
                <p>
                  The standard unit for measuring land area is the meter (m). In
                  Pakistan, however, the marla is commonly used for land
                  measurements. Zameen’s Area Unit Converter allows you to
                  convert between marla, kanal, square feet (sq ft), square
                  yards (sq yds), acres, and hectares.
                </p>
              </li>
              <li>
                <b>Benefits of Using the Area Unit Converter</b>
              </li>
              <li>
                <p>
                  While many involved in Pakistan’s real estate industry are
                  familiar with basic land area units, a significant number of
                  people are not. For example, in Punjab, units such as marla,
                  kanal, and acre are prevalent, while in Sindh, square feet and
                  square yards are more common. This converter is particularly
                  useful for those looking to understand and navigate the
                  property market across different provinces.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
