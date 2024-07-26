import { CustomCarousel } from "@/components/common/CustomCarousel";
import ExploreMore from "@/components/features/exploreMore/ExploreMore";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import TitaniumAgencies from "@/components/layout/TitaniumAgencies";

import PropertyList from "@/components/property/PropertyList";
import { PropertySearch } from "@/components/property/propertySearch";
import CitySearchCard from "@/components/property/propertySearch/CitySearchCard";

import { titaniumAgencies, properties, backgroundImages } from "@/constants";
import { getLatestProperties } from "@/server-actions/property/property";

const CITIES = [
  {
    title: "Lahore",
    image:
      "https://reno.b-cdn.net/wp-content/uploads/2023/08/building-8-980x500.webp",
    value: "lahore",
  },
  {
    title: "Islamabad",
    image:
      "https://reno.b-cdn.net/wp-content/uploads/2023/08/background-e1692365269357-980x777.webp",
    value: "islamabad",
  },
  {
    title: "Karachi",
    image:
      "https://reno.b-cdn.net/wp-content/uploads/2023/05/header-e1683715581611-1-e1691152986557-940x777.webp",
    value: "karachi",
  },
  {
    title: "Faisalabad",
    image:
      "https://reno.b-cdn.net/wp-content/uploads/2023/08/building-980x660.webp",
    value: "faisalabad",
  },
];

export default async function Home() {
  const data = await getLatestProperties();
  const properties = data?.properties;
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
      <section className="mt-14 pt-14 p-8 lg:px-20 min-h-[70vh] bg-[#b2d5eb]">
        <h1 className="text-3xl font-bold py-10">Properties by City</h1>
        <div className="grid lg:grid-cols-4 gap-4">
          {CITIES.map((city, index) => (
            <CitySearchCard
              key={index}
              image={city.image}
              title={city.title}
              value={city.value}
            />
          ))}
        </div>
      </section>
      <section className="py-10 px-10 lg:px-20 ">
        <TitaniumAgencies />
      </section>
      <section className="px-10 lg:px-20 ">
        <ExploreMore/>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
