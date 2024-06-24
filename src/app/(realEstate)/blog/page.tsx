// import Advertisement from "@/app/blog/Advertisement";
// import PostOverlayCard from "@/app/blog/PostOverlayCard";
// import PageInfo from "@/app/blog/PageInfo";
import React from "react";
import PostCard from "@/components/blog/PostCard";

export default function BlogPage() {
  return (
    <main>
      <div className="container mx-auto">
        {/* Page title info */}
        {/* <section>
               <PageInfo />
            </section> */}

        {/* Banner */}
        {/* <section className="my-12">
               <PostOverlayCard />
            </section> */}

        {/* All posts component */}
        <section className="my-20">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((item: any) => (
              <PostCard key={item} id={1} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <button className="btn btn-outline btn-secondary font-work px-5 text-base font-medium">
              Load More
            </button>
          </div>
        </section>

        {/* Advertisement component */}
        {/* <section className="mb-24">
               <Advertisement />
            </section> */}
      </div>
    </main>
  );
}
