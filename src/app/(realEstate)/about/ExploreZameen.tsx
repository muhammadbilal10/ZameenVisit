import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const cardData = [
  {
    title: "Real Estate Listings",
    description: "Look at the best properties around you!",
    imageUrl:
      "https://i.postimg.cc/yxmvMDJf/pexels-jessica-bryant-592135-1370704.jpg",
    route: "/advanced-search",
  },
  {
    title: "New Projects (Coming soon)",
    description: "Explore up-and-coming ventures for max profitability!",
    imageUrl: "https://i.postimg.cc/cL9XGyHN/kol7xopw.png",
    route: "#",
  },
  {
    title: "Area Guides",
    description: "Get all inclusive information of Societies in Pakistan",
    imageUrl: "https://i.postimg.cc/PrMSK8nJ/pexels-rdne-5921494.jpg",
    route: "/tools/area-unit-converter",
  },
  {
    title: "Plot Finder",
    description: "Easily explore various plots in different societies!",
    imageUrl:
      "https://i.postimg.cc/L8sLFxnd/searching-for-house-graphic-e1647477891969.jpg",
    route: "/plot-finder",
  },
];

const ExploreZameen: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Explore Zameen Visit</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Link href={card.route} key={index} className="relative group">
            <Image
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-60 object-cover rounded-lg"
              width={500}
              height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div>
                <h2 className="text-white text-lg font-semibold">
                  {card.title}
                </h2>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreZameen;
