"use client";

import Link from "next/link";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);
  console.log(errors);

  return (
    <footer className=" mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-5 sm:m-10 flex flex-col items-center  text-light dark:text-dark">
      <h3 className=" mt-16 font-medium text-2xl sm:text-3xl md:text-4xl text-center capitalize px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 dark:font-medium font-light text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over community
        to stay up to date with latest news.
      </p>

      <div
        className="flex items-center w-full flex-row md:flex-row mt-16 md:mt-30  relative font-medium 
         py-6 px-8 justify-between"
      >
        <span className="text-center">
          &copy;2023 Kon Yap. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>

        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://www.nyeinminhtet.com"
            className=" underline"
            target="_blank"
          >
            nyeinminhtet
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
