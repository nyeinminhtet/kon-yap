import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

import { Blog } from "@/.contentlayer/generated";

interface Props {
  blog: Blog;
}

const BlogTwoLayout: FC<Props> = ({ blog }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center text-dark dark:text-light group">
      <Link
        href={blog.url_path}
        className=" col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          //   @ts-ignore
          src={blog.image?.replace("../../public", "")}
          alt={blog.title}
          width={550}
          height={560}
          referrerPolicy="no-referrer"
          quality="90"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          className=" aspect-square w-full h-full object-cover object-center  group-hover:scale-110 transition-all ease duration-300"
        />
      </Link>

      <div className=" col-span-12 lg:col-span-8 w-full">
        <span className=" inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
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

        <span className=" inline-block w-full capitalize text-dark/50 dark:text-light/50 font-semibold text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogTwoLayout;
