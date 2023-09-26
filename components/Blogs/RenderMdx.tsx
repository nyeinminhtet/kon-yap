"use client";

import React, { FC } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

import { Blog } from "@/.contentlayer/generated";

interface Props {
  blog: Blog;
}

const mdxComponent = {
  Image,
};

const RenderMdx: FC<Props> = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div
      className=" col-span-12 lg:col-span-8 font-in prose md:prose-base lg:prose-lg max-w-max prose-blockquote:bg-accent/20
     prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic
      prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert first-letter:text-3xl sm:first-letter:text-5xl
      dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark"
    >
      <MDXContent components={mdxComponent} />
    </div>
  );
};

export default RenderMdx;
