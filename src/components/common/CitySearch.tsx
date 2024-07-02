"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFormState } from "react-dom";
import { getCities, getLocations } from "@/server-actions/Search/location";

// const cities = [
//   "Lahore",
//   "Karachi",
//   "Islamabad",
//   "Rawalpindi",
//   "Faisalabad",
//   "Multan",
//   "Peshawar",
//   "Quetta",
//   "Gujranwala",
//   "Sialkot",
//   "Hyderabad",
//   "Bahawalpur",
//   "Sargodha",
//   "Sukkur",
//   "Larkana",
//   "Sheikhupura",
//   "Jhang",
//   "Rahim Yar Khan",
//   "Mardan",
//   "Gujrat",
//   "Kasur",
//   "Mingora",
//   "Dera Ghazi Khan",
//   "Nawabshah",
//   "Sahiwal",
//   "Mirpur Khas",
//   "Okara",
//   "Mandi Bahauddin",
//   "Jacobabad",
//   "Jhelum",
//   "Khanewal",
//   "Khairpur",
//   "Khuzdar",
//   "Daska",
//   "Gojra",
//   "Mandi Bahauddin",
//   "Muridke",
//   "Bahawalnagar",
//   "Pakpattan",
//   "Tando Allahyar",
//   "Hafizabad",
//   "Kotli",
//   "Loralai",
//   "Dera Ismail Khan",
//   "Chaman",
//   "Turbat",
//   "Charsadda",
//   "Kamalia",
//   "Umerkot",
// ];

export function CitySearch({
  city,
  setCity,
}: {
  city: string;
  setCity: (city: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    async function getCitiesData() {
      const data = await getCities();
      data?.cities && setCities(data.cities);
      console.log(cities);
    }
    getCitiesData();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {city ? cities?.find((cty: string) => cty === city) : "Select a city"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Search Location..." />
          <CommandList className="">
            <CommandEmpty>No cities found</CommandEmpty>
            <CommandGroup>
              {cities?.map((cty: string) => (
                <CommandItem
                  key={cty}
                  value={cty}
                  onSelect={(currentValue) => {
                    setCity(cty);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      cty === city ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {cty}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
