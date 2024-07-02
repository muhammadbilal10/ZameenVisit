// import Advertisement from "@/app/blog/Advertisement";
// import PostOverlayCard from "@/app/blog/PostOverlayCard";
// import PageInfo from "@/app/blog/PageInfo";
import React from "react";
import PostCard from "@/components/blog/PostCard";
import ToolHeaderCard from "@/components/features/tools/ToolHeaderCard";

export default function BlogPage() {
  return (
    <main>
      <ToolHeaderCard
        image="https://images.pexels.com/photos/7199669/pexels-photo-7199669.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Blogs"
        description="Stay Informed with the Latest Trends and Tips in Property Buying and Selling"
        className="h-[450px]"
      />
      <div className="container mx-auto">
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
