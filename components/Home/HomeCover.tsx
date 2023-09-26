import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

interface Props {
  blogs: Blog[];
}

const HomeCover: FC<Props> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const defaultBlog = sortedBlogs[0];

  return (
    <div className="w-full inline-block">
      <article className=" sm:h-[80vh] h-[60vh] flex flex-col items-start justify-end mx-5 sm:mx-10 relative">
        <div
          className=" absolute inset-x-0 inset-y-0 h-full bg-gradient-to-b from-transparent from-0%
         to-dark/70 rounded-3xl z-0"
        />
        <Image
          //   @ts-ignore
          src={defaultBlog.image?.replace("../../public", "")}
          alt={defaultBlog.title}
          fill
          className=" w-full h-full object-center object-cover rounded-3xl -z-10"
          priority
          sizes="100vw"
        />
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-end z-0 text-light">
          <Tag
            link={`/categories/${slug(defaultBlog.tags[0])}`}
            name={defaultBlog.tags[0]}
          />
          <Link href={defaultBlog.url_path} className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span
                className=" bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark
              hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {defaultBlog.title}
              </span>
            </h1>
          </Link>
          <p className="hidden mt-4 sm:inline-block md:text-medium lg:text-lg font-in">
            {defaultBlog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCover;
