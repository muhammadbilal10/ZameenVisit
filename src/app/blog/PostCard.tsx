import Link from 'next/link'
import React from 'react'

/**
 * Our PostCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const PostCard = () => {
   return (
      <div className="card w-fit p-4 border border-base-content/10 rounded-xl font-work">
         <figure>
            <img
               src="https://images.pexels.com/photos/7578899/pexels-photo-7578899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="email"
               className={`rounded-xl`}
               width={360}
               height={240}
            />
         </figure>
         <div className="card-body py-6 px-2">
            <span className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
               Property Listing
            </span>
            <h3>
               <Link
                  href="/single-post"
                  className="text-base-content hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
               >
               Discover the Best Properties with ZameenVisit

               </Link>
            </h3>
            <div className="mt-5 flex items-center gap-5 text-base-content/60 ">
               <div className=" flex items-center gap-3">
                  <div className="avatar">
                     <div className="w-9 rounded-full">
                        <img src="https://github.com/shadcn.png" alt="avatar" />
                     </div>
                  </div>
                  <h5>
                     <Link
                        href="/"
                        className="text-base font-medium hover:text-primary transition hover:duration-300"
                     >
                        Muhammad Rizwan
                     </Link>
                  </h5>
               </div>
               <p className="text-base">June 20, 2024</p>
            </div>
         </div>
      </div>
   )
}

export default PostCard