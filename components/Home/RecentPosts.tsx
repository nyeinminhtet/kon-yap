import Link from "next/link";
import React, { FC } from "react";

import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/utils";
import BlogThreeLayout from "../Blogs/BlogThreeLayout";

interface Props {
  blogs: Blog[];
}

const RecentPosts: FC<Props> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 sm:px-10 px-5 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="font-bold text-lg sm:text-xl dark:text-light text-dark md:text-3xl capitalize inline-block w-fit">
          Recent Posts
        </h2>

        <Link
          href="/categories/all"
          className=" inline-block font-medium text-accent dark:text-accentDark underline
       underline-offset-2 text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog) => (
          <article key={blog._id} className=" col-span-1 row-span-1 relative">
            <BlogThreeLayout blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
