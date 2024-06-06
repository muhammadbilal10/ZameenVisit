import TestComponent from "@/components/TestComponent";
import { CustomCarousel } from "@/components/common/CustomCarousel";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

import PropertyList from "@/components/property/PropertyList";
import TitaniumAgencies from "@/components/property/TitaniumAgencies";
import { PropertySearch } from "@/components/property/propertySearch";

import { titaniumAgencies, properties, backgroundImages } from "@/constants";

const AREA_IMAGES = [
  {
    title: "Area 1",
    image:
      "https://reno.b-cdn.net/wp-content/uploads/2023/08/building-8-980x500.webp",
  },
  {
    title: "Area 2",
    image:
      "https://reno.b-cdn.net/wp-content/uploads/2023/08/background-e1692365269357-980x777.webp",
  },
  {
    title: "Area 3",
    image:
      "https://reno.b-cdn.net/wp-content/uploads/2023/05/header-e1683715581611-1-e1691152986557-940x777.webp",
  },
  {
    title: "Area 4",
    image:
      "https://reno.b-cdn.net/wp-content/uploads/2023/08/building-980x660.webp",
  },
];

export default function Home() {
  return (
    <main className="">
      <section>
        <Navbar />
      </section>
      <section id="#hero">
        <Hero images={backgroundImages} />
        <div className="w-3/4 mx-auto sm:w-1/2 -mt-32 z-30 relative">
          <PropertySearch />
        </div>
      </section>
      <section id="properties" className="pt-14 lg:px-20 min-h-screen">
        <PropertyList properties={properties} />
      </section>
      <section className="pt-14 lg:px-20 min-h-screen">
        <h1 className="text-3xl font-bold py-10">Properties by Area</h1>
        <div className="grid grid-cols-4 gap-4">
          {AREA_IMAGES.map((area, index) => (
            <TestComponent key={index} image={area.image} title={area.title} />
          ))}
        </div>
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
