"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { FaBuilding, FaCalculator, FaHome, FaMapMarkedAlt, FaChartLine, FaRulerCombined, FaSearch } from 'react-icons/fa';

const ExploreMore: FC = () => {
  const router = useRouter();

  const items = [
    { icon: <FaBuilding size={40} />, title: 'New Projects', description: 'The best investment opportunities', bgColor: 'bg-yellow-100', route: '/advanced-search' },
    // { icon: <FaCalculator size={40} />, title: 'Construction Cost Calculator', description: 'Get construction cost estimate', bgColor: 'bg-blue-100', route: '/construction-cost-calculator' },
    { icon: <FaHome size={40} />, title: 'Land Records', description: 'Find Information in Land Records', bgColor: 'bg-green-100', route: '/tools/land-records' },
    // { icon: <FaMapMarkedAlt size={40} />, title: 'Area Guides', description: 'Explore housing societies in Pakistan', bgColor: 'bg-red-100', route: '/area-guides' },
    { icon: <FaSearch size={40} />, title: 'Plot Finder', description: 'Find plots in any housing society', bgColor: 'bg-blue-100', route: '/plot-finder' },
    // { icon: <FaChartLine size={40} />, title: 'Property Index', description: 'Track changes in real estate prices', bgColor: 'bg-blue-100', route: '/property-index' },
    { icon: <FaRulerCombined size={40} />, title: 'Area Unit Converter', description: 'Convert any area unit instantly', bgColor: 'bg-purple-100', route: '/tools/area-unit-converter' },
    // { icon: <FaChartLine size={40} />, title: 'Property Trends', description: 'Find popular areas to buy property', bgColor: 'bg-purple-100', route: '/property-trends' },
  ];

  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">Explore more on Zameen</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-4 ${item.bgColor} rounded-lg shadow cursor-pointer`}
            onClick={() => router.push(item.route)}
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="ml-4">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
