import { CustomCarousel } from "@/components/common/CustomCarousel";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";

import PropertyList from "@/components/property/PropertyList";
import TitaniumAgencies from "@/components/property/TitaniumAgencies";
import { PropertySearch } from "@/components/property/propertySearch";

import { titaniumAgencies, properties, backgroundImages } from "@/constants";

export default function Home() {
  return (
    <main className="">
      <section id="#hero">
        <Hero images={backgroundImages} />
        <PropertySearch />
      </section>
      <section
        id="properties"
        className="p-6 px-10 pt-14 lg:px-20 min-h-screen"
      >
        <PropertyList properties={properties} />
      </section>
      <section className="py-10 px-10 lg:px-20 min-h-screen">
        <TitaniumAgencies titaniumAgencies={titaniumAgencies} />
      </section>
      <section className="bg-[#e7f6fd]">
        <Footer />
      </section>
    </main>
  );
}
