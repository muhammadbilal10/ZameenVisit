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
import { getAgenciesByCity } from "@/server-actions/Agency/agency";

export function AgenciesByCitySearch({
  location,
  setLocation,
  city,
}: {
  location: string;
  setLocation: (location: string) => void;
  city: string;
}) {
  const [open, setOpen] = React.useState(false);

  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    async function getLocations() {
      console.log(city);
      const data = await getAgenciesByCity(city);
      console.log(data);
      data?.agencies && setLocations(data?.agencies);
    }
    getLocations();
  }, [city]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <span className="line-clamp-1">
            {location
              ? locations?.find((cty: string) => cty === location)
              : "Select a Location"}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Search Location..." />
          <CommandList className="">
            <CommandEmpty>No agencies found</CommandEmpty>
            <CommandGroup>
              {locations?.map((loc: string) => (
                <CommandItem
                  key={loc}
                  value={loc}
                  onSelect={(currentValue) => {
                    setLocation(loc);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      loc === location ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {loc}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
