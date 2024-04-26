import exp from "constants";
import {
  CircleFadingPlus,
  Facebook,
  Github,
  Instagram,
  LayoutDashboard,
  Linkedin,
  SearchIcon,
  Twitter,
  Youtube,
} from "lucide-react";

import whatsapp from "@/images/socials/whatsapp.svg";

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
import Image from "next/image";

export const socials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/bilalsaddique09/?hl=en",
    icon: <Instagram />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/muhammad-bilal-9b6b9a1b3/",
    icon: <Linkedin />,
  },
  {
    name: "Github",
    link: "https://github.com/muhammadbilal10",
    icon: <Github />,
  },
  {
    name: "Twitter",
    link: "",
    icon: <Twitter />,
  },
  {
    name: "Youtube",
    link: "",
    icon: <Youtube />,
  },
];

export const menus = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Skills", path: "/your-path" },
  { title: "Services", path: "#services" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact me", path: "#contact" },
];

export const FooterServices = [
  {
    title: "Solutions",
    services: ["Marketing", "Analytics", "Commerce", "Insights"],
  },
  {
    title: "Support",
    services: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    services: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  { title: "Legal", services: ["Claim", "Privacy", "Terms"] },
];

// Property data
export const properties = [
  {
    id: 1,
    title: "Platinum Villas DHAM, Multan",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
    price: "PKR 860,000",
    image:
      "https://images.zameen.com/w1600_h900/7/2292/platinum_villas_dham_42653.jpg",
    location: "Multan, DHA Defence",
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    area: "4 marla",
    agentInfo: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "mb0587494@gmail.com",
    },
  },
  {
    id: 2,
    title: "Luxurious Estate in Downtown Jersey",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
    price: "PKR 4.6 Crore",
    image: "https://media.zameen.com/thumbnails/235350911-800x600.jpeg",
    location: "Downtown, Jersey City",
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    area: "4 marla",
    agentInfo: {
      name: "Emily Roes",
      phone: "987-654-3210",
      email: "emily@realty.com",
    },
  },
  {
    id: 3,
    title: "Cozy Cottage Near the Park in Urban Area",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
    price: "PKR 860,000",
    image: "https://images.zameen.com/w1600_h900/7/1537/zameen_opal_39216.jpg",
    location: "Parkside, Jersey City",
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    area: "4 marla",
    agentInfo: {
      name: "Alex Johnson",
      phone: "321-654-0987",
      email: "alex@homes.com",
    },
  },
  {
    id: 4,
    title: "Canal Valley Daska",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
    price: "PKR 860,000",
    image:
      "https://images.zameen.com/w1600_h900/7/1741/canal_valley_daska_28540.jpg",
    location: "Wazirabad Road, Daska",
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    area: "4 marla",
    agentInfo: {
      name: "Samantha Green",
      phone: "456-123-7890",
      email: "samantha@cityrealty.com",
    },
  },
  {
    id: 5,
    title: "Hayatabad Heights, Peshawar",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
    price: "PKR 48 Lakh to 1.63 Crore",
    image:
      "https://images.zameen.com/w1600_h900/7/2063/hayatabad_heights_36297.jpg",
    location: "Peshawar, Hayatabad Phase 3",
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    area: "4 marla",
    agentInfo: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "",
    },
  },
  {
    id: 6,
    title: "Green Oaks Residencia, Peshawar",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
    price: "PKR 860,000",
    image:
      "https://images.zameen.com/w1600_h900/7/2049/green_oaks_residencia_36190.jpg",
    location: "Peshawar, Rahatabad",
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    area: "4 marla",
    agentInfo: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "",
    },
  },
  {
    id: 7,
    title: "Roomi Icon, Karachi",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
    price: "PKR 860,000",
    image: "https://images.zameen.com/w1600_h900/7/2191/roomi_icon_41335.jpg",
    location: "Karachi, Malir Link To Super Highway",
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    area: "4 marla",
    agentInfo: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "",
    },
  },
  {
    id: 8,
    title: "Spanish Villas by Icon, Lahore",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
    price: "PKR 860,000",
    image:
      "https://images.zameen.com/w1600_h900/7/1627/royal_city_sargodha_28525.jpg",
    location: "Islamabad, DHA Defence",
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    area: "4 marla",
    agentInfo: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "",
    },
  },
];

// Agency data
export const titaniumAgencies = [
  {
    id: 1,
    name: "Property View",
    address:
      "Office # 1, 2nd Floor, Al-Hafeez Shopping Mall, Main Boulevard, Gulberg III, Lahore",
    phone: "042-111-111-832",
    email: "contact@propertyview.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 2,
    name: "Olx Real Estate",
    address:
      "Office # 1, 2nd Floor, Al-Hafeez Shopping Mall, Main Boulevard, Gulberg III, Lahore",
    phone: "042-111-111-832",
    email: "contact@Olxrealestate.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 3,
    name: "Dream Homes",
    address: "22-B, Zahoor Elahi Road, Gulberg II, Lahore",
    phone: "042-222-222-222",
    email: "info@dreamhomes.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 4,
    name: "Urban Properties",
    address: "Sector C, Bahria Town, Lahore",
    phone: "042-333-333-333",
    email: "contact@urbanprop.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 5,
    name: "Skyline Realtors",
    address: "Office 15, Floor 3, Ali Tower, M.M. Alam Road, Lahore",
    phone: "042-444-444-444",
    email: "sales@skylinerealtors.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 6,
    name: "Greenfield Estates",
    address: "Plot 12, Greenfield Commercial, DHA Phase VIII, Lahore",
    phone: "042-555-555-555",
    email: "inquiry@greenfieldestates.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 7,
    name: "Luxury Living",
    address: "Building 9, Model Town Extension, Lahore",
    phone: "042-666-666-666",
    email: "support@luxuryliving.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 8,
    name: "Metro City Realtors",
    address: "Office 101, Zaitoon Plaza, Lahore",
    phone: "042-777-777-777",
    email: "contact@metrocity.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 9,
    name: "Estate Legends",
    address: "45-B, Gulberg III, Lahore",
    phone: "042-888-888-888",
    email: "info@estatelegends.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
  {
    id: 10,
    name: "Premier Properties",
    address: "Office 204, 2nd Floor, Siddiq Trade Center, Lahore",
    phone: "042-999-999-999",
    email: "contact@premierproperties.com",
    image: "/images/zameenVisit.png",
    city: "Lahore",
  },
];

export const backgroundImages = [
  "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/spacejoy-4xRP0Ajk9ys-unsplash.jpg",
  "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/spacejoy-scaled.jpg",

  "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/office-working-space-scaled.jpg",
];

export const propertyCategories = [
  "House",
  "Apartment",
  "Plot",
  "Commercial",
  "Farm House",
  "Penthouse",
  "Upper Portion",
  "Lower Portion",
  "Room",
  "Office",
  "Shop",
  "Warehouse",
  "Factory",
  "Building",
  "Agricultural Land",
  "Industrial Land",
  "Residential Plot",
  "Commercial Plot",
  "Industrial Plot",
  "Plot File",
  "Plot Form",
];

export const accountMenuItems = [
  {
    name: "Dashboard",
    shortcut: "⇧⌘P",
    icon: <DashboardIcon />,
    href: "/dashboard",
  },
  {
    name: "My Profile",
    shortcut: "⌘B",
    icon: <PersonIcon />,
    href: "/my-profile",
  },
  {
    name: "My Property List",
    shortcut: "⌘S",
    icon: <HomeIcon />,
    href: "/my-properties",
  },
  {
    name: "Add New Property",
    shortcut: "⌘K",
    icon: <PlusCircledIcon />,
    href: "/add-listing",
  },
  {
    name: "Favorites",
    shortcut: "⌘K",
    icon: <HeartIcon />,
    href: "/favorites",
  },
  {
    name: "Saved Searches",
    shortcut: "⌘K",
    icon: <MagnifyingGlassIcon />,
    href: "/saved-searches",
  },

  // { name: "Logout", shortcut: "⇧⌘Q", icon: <ExitIcon /> },
];

export const dashboardLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/add-listing", icon: CircleFadingPlus, label: "Add New Property" },
  { href: "#", icon: HomeIcon, label: "My Property List" },
  { href: "#", icon: HeartIcon, label: "Favorites" },
  { href: "#", icon: SearchIcon, label: "Saved Searches" },
];

export const areaMenuItems = [
  "Marla",
  "Kanal",
  "Square Feet",
  "Square Yards",
  "Square Meters",
];

export const propertyPurposeList = ["Sale", "Rent"];

export const propertyTypeList = ["House", "Apartment", "Condo"];
export const currencyList = ["PKR", "USD", "EUR"];

export const shareMenuItems = [
  { icon: Facebook, text: "Facebook", link: "https://www.facebook.com" },
  { icon: Twitter, text: "Twitter", link: "https://www.twitter.com" },
  { icon: Linkedin, text: "Linkedin", link: "https://www.linkedin.com" },
  { icon: EnvelopeOpenIcon, text: "Email", link: "mailto:" },
  {
    icon: () => <Image src={whatsapp} alt="whatsapp" width={18} height={18} />,
    text: "WhatsApp",
    link: "https://wa.me/+923200452298",
  },
];

export function formatNumber(str: string) {
  // Remove commas and convert to number
  const num = Number(str.replace(/,/g, ""));

  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return str;
}

export const formatCurrency = (value: number, locale = "en-US") => {
  return new Intl.NumberFormat(locale).format(value);
};
