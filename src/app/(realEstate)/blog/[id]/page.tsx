import React from "react";

export default function BlogDetailsPage() {
  return (
    <main>
      <section>
        <div className="container mx-auto px-5 md:px-0 w-full md:w-10/12 lg:w-5/12 font-work">
          <div className="py-5">
            <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium">
              Property Listing
            </div>
            <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">
              Discover the Best Properties with ZameenVisit, the Leading Real
              Estate Platform
            </h3>
            <div className="mt-3 md:mt-6 flex items-center gap-5 text-base-content/60">
              <div className=" flex items-center gap-3">
                <div className="avatar">
                  <div className="w-9 rounded-full">
                    <img src="https://github.com/shadcn.png" alt="avatar" />
                  </div>
                </div>
                <a
                  href="/"
                  className=" text-xs md:text-sm font-medium hover:text-primary transition hover:duration-300"
                >
                  Muhammad Rizwan
                </a>
              </div>
              <p className="text-xs md:text-sm">June 20, 2024</p>
            </div>
          </div>
          <div className="mt-8">
            <img
              width="800"
              height="462"
              alt={`blog_image`}
              className={`rounded-xl`}
              src="https://images.pexels.com/photos/7578899/pexels-photo-7578899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>

          {/* article section start  */}
          <div className="font-serif">
            <div className="mt-8">
              <p className="text-xl leading-8 text-base-content/80">
                Welcome to ZameenVisit, your trusted partner in finding the
                perfect property. Whether you’re looking to buy, sell, or rent,
                our platform offers a seamless experience with comprehensive
                listings, expert advice, and powerful search tools.
              </p>
              <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                Extensive Property Listings
              </h5>
              <p className="text-xl leading-8 text-base-content/80">
                At ZameenVisit, we provide an extensive database of properties
                to meet every need and budget. From cozy apartments to spacious
                family homes, from commercial spaces to investment properties,
                our platform covers it all. Each listing includes detailed
                descriptions, high-quality images, and accurate pricing to help
                you make informed decisions.
              </p>
              <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                Connect with Trusted Agents
              </h5>
              <p className="text-xl leading-8 text-base-content/80">
                Finding the right real estate agent is crucial for a successful
                property transaction. We connect you with experienced, local
                agents who have in-depth market knowledge and are dedicated to
                helping you navigate the buying or selling process. Our agents
                provide personalized service and expert advice to ensure a
                smooth and stress-free experience.
              </p>
            </div>
            <div className="p-8 bg-base-200 rounded-xl border-l-4  border-base-content/10 mt-8">
              <p className="text-base-content italic text-2xl">
                “ Traveling can expose you to new environments and potential
                health risks, so its crucial to take precautions to stay safe
                and healthy. ”
              </p>
            </div>
            <div className="mt-8">
              <img
                width="800"
                height="462"
                alt={`blog_image`}
                className={`rounded-xl`}
                src="https://images.pexels.com/photos/5849563/pexels-photo-5849563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className="flex items-center justify-center my-8 font-work">
              <div className="py-4 bg-base-content/10 text-base-content/60 text-center rounded-xl w-11/12">
                <p className="text-sm">Advertisement</p>
                <h6 className="text-xl font-semibold leading-[24px]">
                  You can place ads
                </h6>
                <p className="text-lg leading-[26px]">750x100</p>
              </div>
            </div>
            <div className="mb-20">
              <h5 className="text-2xl leading-7 text-base-content font-semibold mb-4">
                Advanced Search Tools
              </h5>
              <p className="text-xl leading-8 text-base-content/80">
                Our advanced search filters allow you to find properties that
                match your specific criteria. Whether you're looking for a
                particular location, price range, property type, or specific
                amenities, our search tools make it easy to narrow down your
                options and find the perfect match. Save your searches and set
                up alerts to stay updated on new listings that meet your
                requirements.
              </p>
              <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                User-Friendly Interface
              </h5>
              <p className="text-xl leading-8 text-base-content/80">
                Our platform is designed with the user in mind. The intuitive
                interface ensures a smooth browsing experience, whether you’re
                searching for properties, connecting with agents, or managing
                your listings. Easy navigation and a clean layout make finding
                what you need a breeze.
              </p>
              {/* <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                        Immerse Yourself in the Local Culture
                     </h5>
                     <p className="text-xl leading-8 text-base-content/80">
                        One of the most rewarding aspects of traveling is
                        immersing yourself in the local culture and customs.
                        This includes trying local cuisine, attending cultural
                        events and festivals, and interacting with locals.
                        Learning a few phrases in the local language can also go
                        a long way in making connections and showing respect.
                     </p>
                     <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                        Capture Memories
                     </h5>
                     <p className="text-xl leading-8 text-base-content/80">
                        Finally, dont forget to capture memories of your
                        journey. Whether is through photographs, journaling, or
                        souvenirs, preserving the moments and experiences of
                        your travels can bring joy and nostalgia for years to
                        come. However, its also essential to be present in the
                        moment and not let technology distract you from the
                        beauty of your surroundings.
                     </p> */}
              <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                Conclusion:
              </h5>
              <p className="text-xl leading-8 text-base-content/80">
                Choosing the right platform for your property needs can make all
                the difference. At ZameenVisit, we strive to provide a
                comprehensive, user-friendly, and efficient solution for buying,
                selling, and renting properties. With our extensive listings,
                advanced search tools, and dedicated support, we are your
                trusted partner in the real estate market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
