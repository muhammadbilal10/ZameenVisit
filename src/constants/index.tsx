import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

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
