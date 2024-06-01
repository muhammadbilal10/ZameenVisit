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

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [location, setLocation] = React.useState("");

  const [state, formAction] = useFormState(getLocations, null);

  const handleInputChange = async (value: string) => {
    const formData = new FormData();
    formData.append("location", value);
    React.startTransition(() => {
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
          {location
            ? locations.find((loc) => loc.value === location)?.label
            : "Select a location"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput
            placeholder="Search city..."
            onValueChange={(value) => {
              handleInputChange(value);
            }}
          />
          <CommandList className="">
            <CommandEmpty>No Location found.</CommandEmpty>
            <CommandGroup>
              {locations?.map((loc) => (
                <CommandItem
                  key={loc.value}
                  value={loc.value}
                  onSelect={(currentValue) => {
                    console.log(currentValue);
                    setLocation(currentValue === location ? "" : currentValue);
                    setOpen(false);
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
  );
}
