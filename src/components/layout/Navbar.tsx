"use client";
import * as React from "react";
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
import { BookText, Handshake, Home, Menu, Phone } from "lucide-react";
import Modal from "../common/Modal";
import SignupForm from "../features/SignupForm";
import SigninForm from "../features/SigninForm";
import LoginForm from "../features/LoginForm";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);
  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Properties", href: "#", icon: Home },
    { name: "Agents", href: "#", icon: Handshake },
    { name: "Blog", href: "#", icon: BookText },
    { name: "Contact", href: "#", icon: Phone },
  ];

  const handleAddListing = () => {
    const isLogin = false;
    if (isLogin) {
    } else {
      setIsLoginOpen(true);
    }
  };
  return (
    <div className="bg-white top-0 start-0 px-6 py-2 flex justify-between items-center h-16 shadow-lg fixed z-40  w-screen ">
      <div className="rounded-lg p-2 max-lg:hidden">
        <Link href="/">
          <Image
            src="/images/zameenVisit2.png"
            alt="Zameen Visit"
            width={80}
            height={80}
            className="h-16 w-24 object-cover"
          />
        </Link>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 ">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <div className="grid gap-2 text-lg font-medium">
              <Link href="/">
                <Image
                  src="/images/zameenVisit2.png"
                  alt="Zameen Visit"
                  width={120}
                  height={120}
                  className="h-16 w-24 object-cover"
                />
              </Link>
              {links.map((link, index) => (
                // <Button key={index} variant="ghost" className="">
                //   <Link href={link.href} className="">
                //     {link.name}
                //   </Link>
                // </Button>
                <Link
                  href={link.href}
                  key={index}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
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
          width={200}
          height={200}
          className="h-16 w-24 object-cover"
        />
      </div>

      <div className="flex items-center justify-center space-x-10 flex-1 max-lg:hidden">
        {links.map((link, index) => (
          <Button key={index} variant="ghost" className="text-md">
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <ProfileDropdownMenu />
        <Modal
          isOpen={isLoginOpen}
          setOpen={setIsLoginOpen}
          className="h-[650px]"
        >
          {isSignupOpen ? (
            <SignupForm setIsSignupOpen={setIsSignupOpen} />
          ) : (
            // <LoginForm setIsSignupOpen={setIsSignupOpen} />
            <SigninForm setIsSignupOpen={setIsSignupOpen} />
          )}
        </Modal>

        <Button className="max-sm:hidden" onClick={handleAddListing}>
          Add Listing
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
