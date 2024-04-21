import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

interface menuItem {
  icon: any;
  text: string;
}

export default function ShareDropdown({
  Icon,
  text,
  menuItems,
  className,
}: {
  Icon: any;
  text: string;
  menuItems: menuItem[];
  className?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2 rounded-lg shadow-md p-2">
          {Icon && <Icon className="w-3 h-3 font-bold" />}
          <p className="hover:text-primary text-xs font-bold">{text}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        {menuItems.map((item, index) => (
          <DropdownMenuItem key={index}>
            <div className="flex items-center gap-2">
              {item.icon && <item.icon className="w-4 h-4" />}
              {item.text}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
