import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Our PostCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const PostCard = ({ id }: { id: number }) => {
  return (
    <>
      <div className="card w-fit p-4 border border-base-content/10 rounded-xl font-work">
        <Link href={`/blog/${id}`}>
          <Image
            src="https://images.pexels.com/photos/7578899/pexels-photo-7578899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="email"
            className={`rounded-xl h-60 bg-cover bg-center`}
            width={860}
            height={600}
          />
          <div className="py-6 px-2 space-y-2">
            <span className=" bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
              Property Listing
            </span>
            <h3 className="text-2xl font-semibold">
              Discover the Best Properties with ZameenVisit
            </h3>
          </div>
        </Link>

        <div className="flex items-center gap-5 text-base-content/60 ">
          <Link href="#">
            <div className=" flex items-center gap-3">
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <Image
                    src="https://github.com/shadcn.png"
                    alt="avatar"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </div>
              </div>
              <h5 className="">Muhammad Rizwan</h5>
            </div>
          </Link>
          <p className="text-base">June 20, 2024</p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
