import * as React from "react";

import { Link } from "gatsby";

export function FeaturedPost({ className, category, title, date, slug }) {
  return (
    <div
      className={`flex items-center flex-col bg-grey w-1/2 py-8 px-12 shadow-md ${className}`}
    >
      <p className="text-base font-semibold border-b-2 border-yellow-500 uppercase w-max">
        {category}
      </p>
      <Link className="flex justify-center" to={slug ?? "#!"}>
        <h1 className="text-5xl text-center w-[95%] cursor-pointer hover:opacity-40">
          {title}
        </h1>
      </Link>
      <p className="mt-8 text-sm font-semibold text-grey">{date}</p>
    </div>
  );
}
