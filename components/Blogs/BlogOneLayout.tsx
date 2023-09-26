import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Blog } from "@/.contentlayer/generated";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

interface Props {
  blog: Blog;
}

const BlogOneLayout: FC<Props> = ({ blog }) => {
  return (
    <div className=" inline-block rounded-xl overflow-hidden group">
      <div
        className=" absolute inset-x-0 inset-y-0 h-full bg-gradient-to-b from-transparent from-0%
         to-dark/70 rounded-xl z-10"
      />
      <Image
        //   @ts-ignore
        src={blog.image?.replace("../../public", "")}
        alt={blog.title}
        width={550}
        height={560}
        referrerPolicy="no-referrer"
        quality="90"
        sizes="(max-width: 1180px) 100vw, 50vw"
        className=" w-full h-full object-center object-cover rounded-xl  group-hover:scale-110 transition-all ease duration-300 "
      />
      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          //   @ts-ignore
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
        />

        <Link href={blog.url_path} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className=" bg-gradient-to-r from-accent to-accent dark:from-accentDark dark:to-accentDark bg-[length:0px_6px]
             hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogOneLayout;
