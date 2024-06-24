import React from "react";
import ExploreZameen from "./ExploreZameen";

export default function AboutPage() {
  return (
    <>
      <section className="container space-y-6  py-8 dark:bg-transparent md:py-10 lg:py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            About
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Welcome to ZameenVisit, your ultimate destination for buying,
            selling, and renting properties. Whether you're looking for your
            dream home, a commercial space, or an investment property, our
            platform offers a comprehensive and user-friendly experience.
            Connect with trusted agents, explore detailed property listings, and
            find your ideal property at competitive prices—all in one place.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-lg p-6">
            <div className="flex flex-col justify-between space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-sm text-gray-600">
                At ZameenVisit, we strive to revolutionize the real estate
                market by providing a seamless, transparent, and efficient
                platform for all your property needs. We are committed to
                connecting buyers, sellers, and agents in a hassle-free and
                secure environment, ensuring every transaction is smooth and
                successful.
              </p>
              <h4 className="text-xl font-bold text-gray-800">
                Why Choose Us?
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>
                  Extensive Listings: Browse through a wide range of properties
                  with detailed descriptions, high-quality images, and accurate
                  pricing.
                </li>
                <li>
                  Trusted Agents: Connect with verified and experienced real
                  estate agents who can guide you through every step of the
                  process.
                </li>
                <li>
                  Advanced Search Filters: Use our sophisticated search tools to
                  find properties that match your specific criteria, including
                  location, price range, property type, and more.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-lg p-6">
            <div className="flex flex-col justify-between space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
              <h4 className="text-xl font-bold text-gray-800">
                Buy and Sell Properties
              </h4>
              <p className="text-sm text-gray-600">
                Our platform provides an extensive selection of properties for
                sale, ensuring you find the perfect match for your needs.
                Whether you are buying your first home, upgrading, or investing,
                our easy-to-navigate listings and expert agents make the process
                straightforward and efficient.
              </p>
              <h4 className="text-xl font-bold text-gray-800">
                Connect with Agents
              </h4>
              <p className="text-sm text-gray-600">
                Finding the right real estate agent is crucial for a successful
                property transaction. At Zameen Visit, we connect you with
                top-rated, local agents who have the expertise and market
                knowledge to help you make informed decisions. Our agents are
                dedicated to providing personalized service and support from
                start to finish.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 py-6 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Real Estate Is Simple With A Zameen Visit Properties Real Estate
            Professional. We have been helping Families Buy and Sell Real Estate
            for over 15 years. We would love to serve you too.
          </p>
        </div>
        <ExploreZameen />
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We have Residential, Commercial, and Rental specialists ready to
            walk you through the process, no matter your needs.
          </p>
        </div>
      </section>
    </>
  );
}
