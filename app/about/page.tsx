import AboutCover from "@/components/About/AboutCover";
import Skills from "@/components/About/Skills";
import React from "react";

const page = () => {
  return (
    <>
      <AboutCover />
      <Skills />
      <h2 className="mt-8 font-semibold dark:font-normal text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light">
        Have you want to know more about me, Free feel to visit to my personal{" "}
        <a
          href="https://www.nyeinminhtet.com"
          className=" text-accent dark:text-accentDark hover:opacity-75"
        >
          website.
        </a>{" "}
      </h2>
    </>
  );
};

export default page;
