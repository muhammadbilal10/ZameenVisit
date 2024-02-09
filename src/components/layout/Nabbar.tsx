import { PowerCircle, PowerSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Real Estate", href: "/about" },
    { name: "Property Single", href: "/contact" },
    { name: "Blog", href: "/property-single" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="rounded-lg p-2">
          <Image
            src="/images/zameenVisit2.png"
            alt="Zameen Visit"
            width={100}
            height={100}
          />
        </div>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="hover:text-gray-300">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
          <PowerCircle className="h-5 w-5 text-white" />
        </button>
        <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
          <PowerSquare className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
