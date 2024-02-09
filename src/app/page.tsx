import Footer from "@/components/layout/Footer";
import PropertyList from "@/components/property/PropertyList";

export default function Home() {
  const properties = [
    {
      id: 1,
      title: "Gorgeous Home for Sale in Jersey",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
      price: "PKR 860,000",
      image: "/images/zameenVisit.png",
      location: "Greenville, Jersey City",
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
      title: "Gorgeous Home for Sale in Jersey",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
      price: "PKR 860,000",
      image: "/images/zameenVisit.png",
      location: "Greenville, Jersey City",
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
      id: 3,
      title: "Gorgeous Home for Sale in Jersey",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
      price: "PKR 860,000",
      image: "/images/zameenVisit.png",
      location: "Greenville, Jersey City",
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
      id: 4,
      title: "Gorgeous Home for Sale in Jersey",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
      price: "PKR 860,000",
      image: "/images/zameenVisit.png",
      location: "Greenville, Jersey City",
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
  return (
    <main className="">
      {/* <Hero /> */}
      <PropertyList properties={properties} />
      <Footer />
    </main>
  );
}
