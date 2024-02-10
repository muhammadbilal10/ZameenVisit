import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import PropertyList from "@/components/property/PropertyList";
import TitaniumAgencies from "@/components/property/TitaniumAgencies";
import { titaniumAgencies, properties } from "@/constants";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <Hero />
      </section>
      <section className="p-6 px-10 lg:px-20">
        <PropertyList properties={properties} />
      </section>
      <section className="py-10 px-10 lg:px-20">
        <TitaniumAgencies titaniumAgencies={titaniumAgencies} />
      </section>
      <section className="bg-[#e7f6fd]">
        <Footer />
      </section>
    </main>
  );
}
