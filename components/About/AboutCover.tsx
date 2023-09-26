import React from "react";
import Image from "next/image";
import CoverPhotot from "@/public/Programmer-pana.svg";

const AboutCover = () => {
  return (
    <section
      className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col
    md:flex-row items-center justify-center text-dark dark:text-light"
    >
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={CoverPhotot}
          alt="about image"
          className=" w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center lg:text-left">
          Dream Big, Work Hard, Achieve More!
        </h2>
        <p className="font-medium text-base capitalize mt-4">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I am A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact—One Pixel At A Time.
        </p>
      </div>
    </section>
  );
};

export default AboutCover;
