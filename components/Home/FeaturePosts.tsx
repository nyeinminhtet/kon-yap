import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/utils";
import React, { FC } from "react";
import BlogOneLayout from "../Blogs/BlogOneLayout";
import BlogTwoLayout from "../Blogs/BlogTwoLayout";

interface Props {
  blogs: Blog[];
}

const FeaturePosts: FC<Props> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 sm:px-10 px-5 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h1 className="font-bold text-lg sm:text-xl dark:text-light text-dark md:text-3xl capitalize inline-block w-full">
        Featured Posts
      </h1>

      <div className=" grid grid-cols-2 grid-rows-2 mt-10 sm:mt-16 gap-6">
        <article className=" col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogOneLayout blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogTwoLayout blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogTwoLayout blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturePosts;
