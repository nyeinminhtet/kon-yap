import { cx } from "@/utils";
import Link from "next/link";
import React, { AnchorHTMLAttributes, FC, HTMLAttributes } from "react";

interface Props {
  link: string;
  name: string;
}

const Tag: FC<Props> = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block text-sm sm:text-base py-2 sm:py-3 px-5 sm:px-10 bg-dark text-light rounded-full capitalize border border-solid font-semibold border-light hover:scale-105 transition-all ease duration-200",
        // @ts-ignore
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
