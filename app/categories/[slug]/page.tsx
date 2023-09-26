import React, { FC } from "react";

import { allBlogs } from "@/.contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";
import Categories from "@/components/Blogs/Categories";
import BlogThreeLayout from "@/components/Blogs/BlogThreeLayout";

interface Props {
  params: {
    slug: string;
  };
}

const page: FC<Props> = ({ params: { slug: blogSlug } }) => {
  const allCategories = ["all"];

  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);

      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }

      if (blogSlug === "all") {
        return true;
      }

      return slugified === blogSlug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 md:px-24 sm:px-10 lg:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-xl sm:text-2xl md:text-3xl">
          #{blogSlug}
        </h1>
        <span className="mt-4 inline-block">
          Discover more categories and expand your knowledge.
        </span>
      </div>

      <Categories categories={allCategories} currentSlug={blogSlug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24  sxl:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32">
        {blogs.map((blog) => (
          <article className="col-span-1 row-span-1 relative" key={blog._id}>
            <BlogThreeLayout blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default page;

export async function generateStaticParams() {
  const slugger = new GithubSlugger();
  const categories: string[] = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}
