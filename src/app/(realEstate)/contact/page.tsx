import { BreadCrumb } from "@/components/common/BreadCrumb";
import ContactCard from "@/components/features/contact/ContactCard";
import ContactForm from "@/components/features/contact/ContactForm";
import ContactMap from "@/components/features/contact/ContactMap";
import ContactPropertySearch from "@/components/features/contact/ContactPropertySearch";
import React from "react";

const CONTACT_BREAD_CRUMB_LIST = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Contact us",
    href: "#",
    active: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="pt-0">
        <ContactMap />
      </div>
      <div className="sm:px-8 px-3 py-7">
        <div className="space-y-2 my-4">
          <BreadCrumb breadCrumbItem={CONTACT_BREAD_CRUMB_LIST} />
        </div>
        <div className="grid grid-cols-12 gap-8 mt-4">
          <div className="lg:col-span-8 col-span-12 space-y-8">
            <ContactCard />
            <ContactForm />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <ContactPropertySearch />
          </div>
        </div>
      </div>
    </>
  );
}
