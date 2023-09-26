import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/rss.png";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-dark dark:text-light mr-1 md:mr-2"
    >
      <div className=" w-9 h-9 md:w-11 md:h-11 relative">
        <Image
          src={logo}
          alt="wifi logo"
          className=" object-contain"
          priority
          sizes="33vw"
          fill
        />
      </div>
      <span className=" font-bold text-lg md:text-xl">Kon Yap</span>
    </Link>
  );
};

export default Logo;
