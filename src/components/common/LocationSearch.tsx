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
import { getLocations } from "@/server-actions/Search/location";

const locations = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

type Location = {
  city: string;
  address: string;
  geo: {
    lat: number;
    lng: number;
  };
};

export function LocationSearch({
  location,
  setLocation,
}: {
  location: Location;
  setLocation: (location: Location) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [state, formAction] = useFormState(getLocations, null);
  const [isPending, startTransition] = React.useTransition();

  const handleInputChange = async (value: string) => {
    const formData = new FormData();
    formData.append("location", value);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {location?.address
            ? state?.find((loc: Location) => loc.address === location?.address)
                ?.address
            : "Select a location"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput
            placeholder="Search Location..."
            onValueChange={(value) => {
              handleInputChange(value);
            }}
          />
          <CommandList className="">
            <CommandEmpty>
              {isPending ? "Loading..." : "No results found"}
            </CommandEmpty>
            <CommandGroup>
              {state?.map((loc: Location) => (
                <CommandItem
                  key={loc?.address}
                  value={loc.address}
                  onSelect={(currentValue) => {
                    setLocation(loc);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      location?.address === loc?.address
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {loc.address}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
