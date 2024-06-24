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
import SignupForm from "../auth/SignupForm";
import SigninForm from "../auth/SigninForm";
import LoginForm from "../auth/LoginForm";
import ForgotPasswordForm from "../auth/ForgotPasswordForm";
import OTPForm from "../auth/OTPForm";
import UpdatePasswordForm from "../auth/UpdatePasswordForm";
import { useSession } from "../auth/auth-wrapper";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import CustomNavigationMenu from "../common/CustomNavigationMenu";

const NAVBAR_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "Properties", href: "/advanced-search", icon: Home },
  {
    name: "Plot Finder",
    href: "/plot-finder",
    icon: Home,
  },

  { name: "Agents", href: "/agents", icon: Handshake },
  {
    name: "Blog",
    href: "/blog",
    icon: Handshake,
  },
  {
    name: "About",
    href: "/about",
    icon: Handshake,
  },
  { name: "Contact", href: "/contact", icon: Phone },
];

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(true);
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = React.useState(false);
  const [isUpdatePasswordOpen, setIsUpdatePasswordOpen] = React.useState(false);
  const [isOTPOpen, setIsOTPOpen] = React.useState(false);

  const session = useSession();
  const router = useRouter();
  const pathName = usePathname();
  console.log("pathName", pathName);

  const handleAddListing = () => {
    const isLogin = false;
    if (session) {
      router.push("/add-listing");
    } else {
      setIsModelOpen(true);
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
              {NAVBAR_LINKS.map((link, index) => (
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

      <div className="flex items-center justify-center space-x-4 flex-1 max-lg:hidden">
        {NAVBAR_LINKS.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            className={
              (cn("text-md border-b-2"),
              pathName === link.href
                ? "bg-transparent shadow-none rounded-none border-b-2  border-transparent border-gray-700"
                : "")
            }
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
        <CustomNavigationMenu />
      </div>
      <div className="flex items-center space-x-4">
        {session && <ProfileDropdownMenu />}
        <Modal isOpen={isModelOpen} setOpen={setIsModelOpen} className="">
          {isForgotPasswordOpen && (
            <ForgotPasswordForm
              setIsForgotPasswordOpen={setIsForgotPasswordOpen}
              setIsSignInOpen={setIsLoginOpen}
              setIsOTPOpen={setIsOTPOpen}
            />
          )}

          {isSignupOpen && (
            <SignupForm
              setIsSignupOpen={setIsSignupOpen}
              setIsSignInOpen={setIsLoginOpen}
              setIsOTPOpen={setIsOTPOpen}
            />
          )}
          {isLoginOpen && (
            <SigninForm
              setIsForgotPasswordOpen={setIsForgotPasswordOpen}
              setIsSignupOpen={setIsSignupOpen}
              setIsSignInOpen={setIsLoginOpen}
            />
          )}
          {isOTPOpen && (
            <OTPForm
              setIsSignInOpen={setIsLoginOpen}
              setIsOTPOpen={setIsOTPOpen}
              setIsUpdatePasswordOpen={setIsUpdatePasswordOpen}
            />
          )}
          {isUpdatePasswordOpen && (
            <UpdatePasswordForm
              setIsSignInOpen={setIsLoginOpen}
              setIsUpdatePasswordOpen={setIsUpdatePasswordOpen}
            />
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
