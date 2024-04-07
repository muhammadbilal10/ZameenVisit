import { RowsIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { ProfileDropdownMenu } from "../user/UserProfile/ProfileDropdownMenu";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Real Estate", href: "/about" },
    { name: "Property Single", href: "/contact" },
    { name: "Blog", href: "/property-single" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="bg-white top-0 start-0 px-4 py-2 flex justify-between items-center h-24 shadow-lg fixed z-40 w-full ">
      <div className="rounded-lg p-2 max-lg:hidden">
        <Link href="/">
          <Image
            src="/images/zameenVisit2.png"
            alt="Zameen Visit"
            width={120}
            height={120}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <RowsIcon className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              {/* <SheetTitle>Edit profile</SheetTitle> */}
              {/* <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription> */}
            </SheetHeader>
            <div className="flex flex-col items-start">
              {links.map((link, index) => (
                <Button key={index} variant="ghost" className="">
                  <Link href={link.href} className="">
                    {link.name}
                  </Link>
                </Button>
              ))}
            </div>
            <SheetFooter>
              <SheetClose asChild>
                {/* <Button type="submit">Save changes</Button> */}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="rounded-lg p-2 lg:hidden">
        <Image
          src="/images/zameenVisit2.png"
          alt="Zameen Visit"
          width={120}
          height={120}
          objectFit="contain"
        />
      </div>

      <div className="flex items-center justify-center space-x-10 flex-1 max-lg:hidden">
        {links.map((link, index) => (
          <Button key={index} variant="ghost" className="text-xl">
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <ProfileDropdownMenu />
        <Button className="max-sm:hidden">Add Listing</Button>
      </div>
    </div>
  );
};

export default Navbar;
