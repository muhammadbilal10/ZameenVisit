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

import { Check, ChevronsUpDown } from "lucide-react";

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

export function PropertySearchCard() {
  const [open, setOpen] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [city, setCity] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [priceMin, setPriceMin] = React.useState("");
  const [priceMax, setPriceMax] = React.useState("");
  const [areaMin, setAreaMin] = React.useState("");
  const [areaMax, setAreaMax] = React.useState("");

  const frameworks = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Ember", value: "ember" },
    { label: "Preact", value: "preact" },
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
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Select a city"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search city..." />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks?.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
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

        <div className="space-y-1">
          <Label htmlFor="location">Location</Label>
        </div>
        <div className="space-y-1">
          <Label htmlFor="area">Price</Label>
          <Select open={reset} onOpenChange={setReset}>
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
            <SelectContent>
              <SelectGroup className="p-4">
                <SelectLabel className="pl-1">Price Selector</SelectLabel>

                <div className="flex space-x-2">
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
                      PKR {priceMin || "0"} to PKR {priceMax || "500,000,000"}
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
                  <Button onClick={() => setReset(false)}>Apply</Button>
                </div>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="area">Area</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="max-sm:w-full w-[230px]">
          <Link href="/property/search">Search</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
