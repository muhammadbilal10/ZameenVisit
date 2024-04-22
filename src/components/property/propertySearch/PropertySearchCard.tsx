"use client";
import * as React from "react";
import { CustomSelect } from "@/components/common/CustomSelect";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency, formatNumber, propertyCategories } from "@/constants";
import Link from "next/link";

import {
  Calculator,
  Calendar,
  Check,
  ChevronsUpDown,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ComboboxDemo } from "@/components/TestComponent";
import { Slider } from "@/components/ui/slider";
import { set } from "date-fns";

export function PropertySearchCard({ searchAction }: { searchAction: string }) {
  const [open, setOpen] = React.useState(false);
  const [priceOpen, setPriceOpen] = React.useState(false);
  const [locationOpen, setLocationOpen] = React.useState(false);
  const [areaOpen, setAreaOpen] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [priceMin, setPriceMin] = React.useState("");
  const [priceMax, setPriceMax] = React.useState("");
  const [areaMin, setAreaMin] = React.useState("");
  const [areaMax, setAreaMax] = React.useState("");
  const [areaUnit, setAreaUnit] = React.useState("marla");
  const [projectTitle, setProjectTitle] = React.useState("");
  const [developerTitle, setDeveloperTitle] = React.useState("");
  const [areaRange, setAreaRange] = React.useState([0, 50]);

  const cities = [
    {
      label: "Islamabad",
      value: "islamabad",
    },
    {
      label: "Rawalpindi",
      value: "rawalpindi",
    },
    {
      label: "Lahore",
      value: "lahore",
    },
    {
      label: "Karachi",
      value: "karachi",
    },
    {
      label: "Peshawar",
      value: "peshawar",
    },
    {
      label: "Quetta",
      value: "quetta",
    },
    {
      label: "Faisalabad",
      value: "faisalabad",
    },
    {
      label: "Multan",
      value: "multan",
    },
    {
      label: "Gujranwala",
      value: "gujranwala",
    },
    {
      label: "Sialkot",
      value: "sialkot",
    },
  ];

  const locations = [
    {
      label: "Gulberg, Islamabad",
      value: "gulberg-islamabad",
    },
    {
      label: "Bahria Town, Islamabad",
      value: "bahria-town-islamabad",
    },
    {
      label: "DHA, Islamabad",
      value: "dha-islamabad",
    },
    {
      label: "Gulberg, Lahore",
      value: "gulberg-lahore",
    },
    {
      label: "Bahria Town, Lahore",
      value: "bahria-town-lahore",
    },
    {
      label: "DHA, Lahore",
      value: "dha-lahore",
    },
    {
      label: "Clifton, Karachi",
      value: "clifton-karachi",
    },
    {
      label: "DHA, Karachi",
      value: "dha-karachi",
    },
    {
      label: "Gulshan-e-Iqbal, Karachi",
      value: "gulshan-e-iqbal-karachi",
    },
    {
      label: "Hayatabad, Peshawar",
      value: "hayatabad-peshawar",
    },
    {
      label: "University Town, Peshawar",
      value: "university-town-peshawar",
    },
    {
      label: "Cantt, Peshawar",
      value: "cantt-peshawar",
    },
    {
      label: "Cantt, Quetta",
      value: "cantt-quetta",
    },
    {
      label: "Jinnah Town, Quetta",
      value: "jinnah-town-quetta",
    },
    {
      label: "Model Town, Faisalabad",
      value: "model-town-faisalabad",
    },
    {
      label: "DHA, Faisalabad",
      value: "dha-faisalabad",
    },
    {
      label: "Gulberg, Faisalabad",
      value: "gulberg-faisalabad",
    },
    {
      label: "Cantt, Multan",
      value: "cantt-multan",
    },
    {
      label: "DHA, Multan",
      value: "dha-multan",
    },
    {
      label: "Gulgasht, Multan",
      value: "gulgasht-multan",
    },
    {
      label: "Cantt, Gujranwala",
      value: "cantt-gujranwala",
    },
    {
      label: "DC Colony, Gujranwala",
      value: "dc-colony-gujranwala",
    },
  ];

  const areaUnits = [
    {
      label: "Marla",
      value: "marla",
      range: [0, 50],
    },
    {
      label: "Kanal",
      value: "kanal",
      range: [0, 10],
    },
    {
      label: "Square Feet",
      value: "sqft",
      range: [0, 5000],
    },
    {
      label: "Square Yards",
      value: "sqyd",
      range: [0, 5000],
    },
    {
      label: "Square Meters",
      value: "sqm",
      range: [0, 5000],
    },
  ];

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription> */}
      </CardHeader>
      <CardContent className="gap-3 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        <div className="space-y-1">
          <Label htmlFor="email">Category</Label>
          <CustomSelect
            items={propertyCategories}
            placeholderVal="Select a Category "
            label="Property Category"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <Label htmlFor="city">City</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {city
                  ? cities.find((framework) => framework.value === city)?.label
                  : "Select a city"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search city..." />
                <CommandList className="">
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {cities?.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          console.log(currentValue);
                          setCity(currentValue === city ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            city === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col space-y-3">
          <Label htmlFor="city">Location</Label>
          <Popover open={locationOpen} onOpenChange={setLocationOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={locationOpen}
                className="w-full justify-between"
              >
                {location
                  ? locations.find((loc) => loc.value === location)?.label
                  : "Select a location"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search city..." />
                <CommandList className="">
                  <CommandEmpty>No Location found.</CommandEmpty>
                  <CommandGroup>
                    {locations?.map((loc) => (
                      <CommandItem
                        key={loc.value}
                        value={loc.value}
                        onSelect={(currentValue) => {
                          console.log(currentValue);
                          setLocation(
                            currentValue === location ? "" : currentValue
                          );
                          setLocationOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            location === loc.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {loc.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-1">
          <Label htmlFor="area">Price</Label>
          <Select open={priceOpen} onOpenChange={setPriceOpen}>
            <SelectTrigger className="">
              <SelectValue
                placeholder={
                  !priceMax
                    ? `Select a Price`
                    : `PKR ${formatNumber(priceMin)} - PKR ${formatNumber(
                        priceMax
                      )}`
                }
              />
            </SelectTrigger>
            <SelectContent className="max-sm:w-[300px]">
              <SelectGroup className="p-4">
                <SelectLabel className="pl-1">Price Selector</SelectLabel>

                <div className="flex sm:space-x-2 max-sm:flex-col max-sm:space-y-2">
                  <Input
                    type="text"
                    value={priceMin}
                    placeholder="PKR 0"
                    onChange={(e) => {
                      const value = Number(
                        e.target.value.replace(/[^0-9.-]+/g, "")
                      );
                      setPriceMin(formatCurrency(value));
                    }}
                  />
                  <Input
                    type="text"
                    value={priceMax}
                    placeholder="PKR 500,000,000"
                    onChange={(e) => {
                      const value = Number(
                        e.target.value.replace(/[^0-9.-]+/g, "")
                      );
                      setPriceMax(formatCurrency(value));
                    }}
                  />
                </div>

                <div className="mt-4">
                  <Label htmlFor="Price Range">
                    Price Range :{" "}
                    <span className="text-blue-500">
                      PKR {formatNumber(priceMin) || "0"} to PKR{" "}
                      {formatNumber(priceMax) || formatNumber("5,000,000,000")}
                    </span>
                  </Label>
                  <Slider
                    defaultValue={[0, 5000000000]}
                    step={10000}
                    min={0}
                    max={5000000000}
                    onValueChange={(value) => {
                      console.log(value);

                      setPriceMin(formatCurrency(value[0]));
                      setPriceMax(formatCurrency(value[1]));
                    }}
                  />
                </div>
                <div className="space-x-2 mt-4">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setPriceMin("");
                      setPriceMax("");
                    }}
                  >
                    Reset
                  </Button>
                  <Button onClick={() => setPriceOpen(false)}>Apply</Button>
                </div>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="area">Area (Marla)</Label>
          <Select open={areaOpen} onOpenChange={setAreaOpen}>
            <SelectTrigger className="">
              <SelectValue
                placeholder={
                  !areaMax && !areaMin
                    ? `Select a area`
                    : `${areaUnit.toUpperCase()} ${areaMin} - ${areaUnit} ${areaMax}`
                }
              />
            </SelectTrigger>
            <SelectContent className="max-sm:w-[350px] w-[350px]">
              <SelectGroup className="p-4">
                <div className="flex mb-2 justify-between">
                  <SelectLabel className="pl-1">Price Selector</SelectLabel>
                  <Select
                    value={areaUnit}
                    onValueChange={(value) => {
                      setAreaUnit(value);
                      const areaUnit = areaUnits.find(
                        (unit) => unit.value === value
                      );
                      if (areaUnit) {
                        setAreaRange(areaUnit.range);
                        setAreaMax(areaUnit.range[1].toString());
                        setAreaMin(areaUnit.range[0].toString());
                        console.log(areaUnit.range);
                      }
                    }}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Area Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {areaUnits.map((unit) => (
                        <SelectItem key={unit.value} value={unit.value}>
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex sm:space-x-2 max-sm:flex-col max-sm:space-y-2">
                  <Input
                    type="number"
                    min={areaRange[0].toString()}
                    max={areaRange[1].toString()}
                    value={areaMin}
                    placeholder={`Min Area (${areaUnit})`}
                    onChange={(e) => {
                      let value = Number(e.target.value);
                      if (value < 1) {
                        value = 1;
                      } else if (value > areaRange[1]) {
                        value = areaRange[1];
                      }
                      e.target.value = value.toString();
                      setAreaMin(value.toString());
                    }}
                  />
                  <Input
                    type="number"
                    min={areaRange[0].toString()}
                    max={areaRange[1].toString()}
                    value={areaMax}
                    placeholder={`Max Area (${areaUnit})`}
                    onChange={(e) => {
                      let value = Number(e.target.value);
                      if (value < 1) {
                        value = 1;
                      } else if (value > areaRange[1]) {
                        value = areaRange[1];
                      }
                      e.target.value = value.toString();
                      setAreaMax(value.toString());
                    }}
                  />
                </div>

                <div className="mt-4">
                  <Label htmlFor="Area Range">
                    Area Range :{" "}
                    <span className="text-blue-500">
                      {areaUnit} {areaMin || areaRange[0]} to {areaUnit}{" "}
                      {areaMax || areaRange[1]}
                    </span>
                  </Label>
                  <Slider
                    defaultValue={areaRange}
                    step={1}
                    min={areaRange[0]}
                    max={areaRange[1]}
                    onValueChange={(value) => {
                      setAreaMin(value[0].toString());
                      setAreaMax(value[1].toString());
                    }}
                  />
                </div>
                <div className="space-x-2 mt-4">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setAreaMin("");
                      setAreaMax("");
                    }}
                  >
                    Reset
                  </Button>
                  <Button onClick={() => setAreaOpen(false)}>Apply</Button>
                </div>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="max-sm:w-full w-[230px]">
          <Link
            href={{
              pathname: "/advanced-search",
              query: {
                searchAction: searchAction,
                category: category,
                city: city,
                location: location,
                priceMin: priceMin,
                priceMax: priceMax,
                areaMin: areaMin,
                areaMax: areaMax,
              },
            }}
          >
            Search
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
