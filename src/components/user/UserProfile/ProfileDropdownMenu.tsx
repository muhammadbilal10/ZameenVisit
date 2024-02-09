import {
  EnvelopeOpenIcon,
  ExitIcon,
  PersonIcon,
  HomeIcon,
  PlusIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PlusCircledIcon,
  DashboardIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function ProfileDropdownMenu() {
  const accountMenuItems = [
    { name: "Dashboard", shortcut: "⇧⌘P", icon: <DashboardIcon /> },
    { name: "My Profile", shortcut: "⌘B", icon: <PersonIcon /> },
    { name: "My Property List", shortcut: "⌘S", icon: <HomeIcon /> },
    { name: "Add New Property", shortcut: "⌘K", icon: <PlusCircledIcon /> },
    { name: "Favorites", shortcut: "⌘K", icon: <HeartIcon /> },
    { name: "Saved Searches", shortcut: "⌘K", icon: <MagnifyingGlassIcon /> },
    { name: "Favorites", shortcut: "⌘K", icon: <HeartIcon /> },
    // { name: "Logout", shortcut: "⇧⌘Q", icon: <ExitIcon /> },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className={cn("cursor-pointer")}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {accountMenuItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <span className="mr-2 h-4 w-4">{item.icon}</span>
              {item.name}
              <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ExitIcon className="mr-2 h-4 w-4" /> Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
