import React, { FC } from "react";

import Category from "./Category";
import { slug } from "github-slugger";

interface Props {
  categories: string[];
  currentSlug: string;
}

const Categories: FC<Props> = ({ categories, currentSlug }) => {
  return (
    <div
      className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid
    border-dark dark:border-light py-4  items-start flex flex-wrap font-medium mx-5 md:mx-10"
    >
      {categories.map((cat) => (
        <Category
          key={cat}
          name={cat}
          active={currentSlug === slug(cat)}
          link={`/categories/${cat}`}
        />
      ))}
    </div>
  );
};

export default Categories;
