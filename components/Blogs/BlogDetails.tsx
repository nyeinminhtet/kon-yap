import { Blog } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React, { FC } from "react";
import { slug } from "github-slugger";

interface Props {
  blog: Blog;
  blogSlug: string;
}

const BlogDetails: FC<Props> = ({ blog, blogSlug }) => {
  return (
    <div
      className=" px-2 md:px-10 bg-accent dark:bg-accentDark dark:text-dark text-light py-2 flex flow-wrap items-center text-lg justify-around
    sm:text-xl font-medium mx-5 md:mx-10 rounded-lg"
    >
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d,yyyy")}
      </time>
      <div className="m-3">{blog.readingTime.text}</div>

      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
