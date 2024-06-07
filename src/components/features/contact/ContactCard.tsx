import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const CONTACT_DETAILS = [
  {
    id: 1,
    label: "Mobile",
    value: "+92 349 441 1115",
    href: "tel:+923494411115",
  },
  {
    id: 2,
    label: "WhatsApp",
    value: "+92 349 441 1115",
    href: "https://wa.me/923494411115",
  },
  {
    id: 3,
    label: "Email",
    value: "mb0587494@gmail.com",
    href: "mailto:",
  },
];

const SOCIALS_DETAILS = [
  {
    id: 1,
    label: "Facebook",
    value: "Zameen Visit",
    icon: <Facebook className="h-5 w-5" />,
    href: "https://www.facebook.com/zameenvisit",
  },
  {
    id: 2,
    label: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    value: "Zameen Visit",
    href: "https://www.instagram.com/zameenvisit",
  },
  {
    id: 3,
    label: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    value: "Zameen Visit",
    href: "https://twitter.com/zameenvisit",
  },
  {
    id: 4,
    label: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    value: "Zameen Visit",
    href: "https://www.linkedin.com/company/zameen-visit",
  },
];

export default function ContactCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Zameen Visit</CardTitle>
        <h2 className="text-muted-foreground text-sm">
          Reno Production City (IMPZ)
        </h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-x-8 flex mb-4">
          {SOCIALS_DETAILS.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              className="text-muted-foreground"
              target="_blank"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <div className="space-y-2">
          {CONTACT_DETAILS.map((contact) => (
            <div key={contact.id} className=" space-x-3 text-sm">
              <Label htmlFor="phone" className="text-muted-foreground ">
                {contact.label}:
              </Label>
              <Link
                id="phone"
                href={`tel:+923494411115`}
                className=""
                target="_blank"
              >
                {contact.value}
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col space-y-2">
        <p className="text-sm text-muted-foreground">
          Whether you’re looking for property for sale in New York area or
          property for rent, WP Residence makes searching easy. Use our unique
          geolocation mapping feature to root-out your ideal villa, townhouse or
          apartment and contact the owners direct. We will help you find your
          dream house in just a few seconds.
        </p>
        <p className="text-sm text-muted-foreground">
          We offer our clients a wealth of knowledge regarding all aspects of
          purchasing or selling a home. Whether it is helping you search for
          your dream home, discussing new New York real estate developments, or
          assisting with the sale of your property, we would love the
          opportunity to help. Please feel free to contact us with any
          questions!
        </p>
      </CardFooter>
    </Card>
  );
}
