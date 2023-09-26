import { notFound } from "next/navigation";
import Image from "next/image";
import { slug } from "github-slugger";

import { allBlogs } from "@/.contentlayer/generated";
import Tag from "@/components/Elements/Tag";
import BlogDetails from "@/components/Blogs/BlogDetails";
import RenderMdx from "@/components/Blogs/RenderMdx";

interface Props {
  params: {
    slug: string;
  };
}

const BlogPlage = ({ params }: Props) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) notFound();
  return (
    <article>
      <div className=" relative w-full h-[70vh] mb-8 text-center bg-dark">
        <div
          className="flex flex-col z-10 w-full items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2
         -translate-y-1/2"
        >
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            // @ts-ignore
            className="px-6 text-sm py-2"
          />
          <h1
            className=" inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl
           leading-normal relative w-5/6"
          >
            {blog.title}
          </h1>
        </div>

        <div className=" absolute inset-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          //   @ts-ignore
          src={blog.image?.replace("../../public", "")}
          alt={blog.title}
          width={550}
          height={560}
          referrerPolicy="no-referrer"
          quality="90"
          priority
          sizes="100vw"
          className=" aspect-square w-full h-full object-cover object-center"
        />
      </div>

      <BlogDetails blog={blog} blogSlug={params.slug} />

      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 sm:px-10">
        <div className=" col-span-12 lg:col-span-4">
          <details
            className=" border-[1px] border-solid border-dark dark:border-light dark:text-light rounded-lg p-4 sticky
          top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary
              className="text-lg font-semibold capitalize cursor-pointer
            "
            >
              Table Of Content
            </summary>

            <ul className="mt-4 font-in text-base">
              {blog.toc.map((heading: any) => (
                <li key={`#${heading.slug}`} className="py-1">
                  <a
                    href={`#${heading.slug}`}
                    data-level={heading.level}
                    className="data-[level=two]:pl-0 data-[level=two]:pt-2
                  data-[level=two]:border-t border-solid border-dark/40
                  data-[level=three]:pl-4
                  sm:data-[level=three]:pl-6 flex items-center justify-start
                  "
                  >
                    {heading.level === "three" ? (
                      <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                        &nbsp;
                      </span>
                    ) : null}
                    <span className=" hover:underline">{heading.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <RenderMdx blog={blog} />
      </div>
    </article>
  );
};

export default BlogPlage;

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}
