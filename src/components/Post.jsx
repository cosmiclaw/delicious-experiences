import * as React from "react";

import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export function Post({ category, title, date, image, slug }) {
  return (
    <div className="flex items-center flex-col">
      {/* <img src={image} alt={title} /> */}
      <GatsbyImage className="h-72" image={image} alt={title} />
      <p className="mt-4 text-sm font-semibold border-b-2 border-yellow-500 uppercase w-max">
        {category}
      </p>
      <Link className="flex justify-center" to={slug ?? "/#!"}>
        <h1 className="title-font mt-2 text-2xl font-semibold text-center w-[70%] cursor-pointer hover:opacity-60">
          {title}
        </h1>
      </Link>
      <p className="mt-3 text-sm font-semibold text-grey">{date}</p>
    </div>
  );
}
