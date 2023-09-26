import React from "react";

const SkillsList = [
  "react.js",
  "next.js",
  "tailwind.css",
  "material-ui",
  "shadcn/ui",
  "typescript",
  "framer-motion",
  "redux-toolkit",
  "nextauth.js",
  "JWT",
  "node.js",
  "express.js",
  "prisma",
  "mysql",
  "postgresql",
  "mongodb",
  "git",
  "linux",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light dark:text-light text-dark">
      <span className="font-bold text-lg sm:text-2xl md:text-4xl text-accent dark:text-accentDark">
        I am comfortable in ...
      </span>

      <ul className="flex flex-wrap mt-8 justify-center xs:justify-start">
        {SkillsList.map((skill) => (
          <li
            key={skill}
            className=" font-semibold inline-block capitalize text-base sm:text-lg lg:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12
             border border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4 md:mr-6 md:mb-6 hover:scale-105 hover:text-accent dark:hover:text-accentDark dark:hover:border-accentDark hover:border-accent transition-all
             ease duration-200 cursor-pointer dark:font-normal"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
