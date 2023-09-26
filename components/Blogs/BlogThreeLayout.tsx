import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

import { Blog } from "@/.contentlayer/generated";

interface Props {
  blog: Blog;
}

const BlogThreeLayout: FC<Props> = ({ blog }) => {
  return (
    <div className="flex flex-col items-center text-dark dark:text-light group">
      <Link href={blog.url_path} className="h-full rounded-xl overflow-hidden">
        <Image
          //   @ts-ignore
          src={blog.image?.replace("../../public", "")}
          alt={blog.title}
          width={550}
          height={560}
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,33vw"
          referrerPolicy="no-referrer"
          quality="90"
          className=" aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-110 transition-all ease duration-300"
        />
      </Link>

      <div className="flex flex-col mt-4 w-full">
        <span className=" uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>

        <Link href={blog.url_path} className="my-1 inline-block">
          <h2 className="font-semibold capitalize text-base sm:text-lg ">
            <span
              className=" bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className=" capitalize text-dark/50 dark:text-light/50 font-semibold text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogThreeLayout;
