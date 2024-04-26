import { CustomCarousel } from "@/components/common/CustomCarousel";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

import PropertyList from "@/components/property/PropertyList";
import TitaniumAgencies from "@/components/property/TitaniumAgencies";
import { PropertySearch } from "@/components/property/propertySearch";

import { titaniumAgencies, properties, backgroundImages } from "@/constants";

export default function Home() {
  return (
    <main className="">
      <section>
        <Navbar />
      </section>
      <section id="#hero">
        <Hero images={backgroundImages} />
        <PropertySearch />
      </section>
      <section id="properties" className="pt-14 lg:px-20 min-h-screen">
        <PropertyList properties={properties} />
      </section>
      <section className="py-10 px-10 lg:px-20 min-h-screen">
        <TitaniumAgencies titaniumAgencies={titaniumAgencies} />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
