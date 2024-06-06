"use client";
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
import Link from "next/link";
import { accountMenuItems } from "@/constants";
import { ExitIcon } from "@radix-ui/react-icons";
import { logout } from "@/server-actions/auth";
import { useSession } from "@/components/auth/auth-wrapper";

export function ProfileDropdownMenu() {
  const session = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className={cn("cursor-pointer")}>
          <AvatarImage
            src={session?.user?.image || "https://github.com/shadcn.png"}
            alt={session?.user?.name || "@Shadcn"}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {accountMenuItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link href={item.href} className="flex items-center">
                <span className="mr-2 h-4 w-4">{item.icon}</span>
                {item.name}
              </Link>
              {/* <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            await logout();
          }}
        >
          <ExitIcon className="mr-2 h-4 w-4" /> Log out
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
