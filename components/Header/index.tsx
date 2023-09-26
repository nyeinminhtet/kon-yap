"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";

import Logo from "./logo";
import { MoonIcon, SunIcon } from "@/utils/Icons";
import { useTheme } from "../Hooks/useTheme";
import { cx } from "@/utils";

const Header = () => {
  const [mode, setMode] = useTheme();
  const [click, setClick] = useState(false);

  return (
    <header className="w-full flex p-4 px-5 sm:px-10 items-center justify-between">
      <Logo />

      <button
        className=" inline-block sm:hidden z-50 dark:text-white text-dark"
        onClick={() => setClick((pre) => !pre)}
        aria-label="Hamburger Menu"
      >
        {click ? <X /> : <AlignJustify size={25} />}
      </button>

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>

        <button
          onClick={() => {
            // @ts-ignore
            setMode(mode === "light" ? "dark" : "light");
          }}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav
        className="w-max gap-4 py-3 px-8 border border-solid
       border-dark rounded-full font-medium hidden sm:flex
       fixed top-2  items-center right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <button
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )} // @ts-ignore
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <button className="hidden sm:inline-block" />
    </header>
  );
};

export default Header;
