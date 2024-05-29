import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CustomSelect({
  items,
  placeholderVal,
  label,
  defaultValue,
  onChange,
}: {
  items: string[];
  placeholderVal: string;
  label?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange} required>
      <SelectTrigger className="">
        <SelectValue placeholder={placeholderVal} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
