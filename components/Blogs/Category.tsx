import { cx } from "@/utils";
import Link from "next/link";
import React, { AnchorHTMLAttributes, FC, HTMLAttributes } from "react";

interface Props {
  link: string;
  name: string;
  active: boolean;
}

const Category: FC<Props> = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1  md:py-2 mx-2 px-6 md:px-10 rounded-full  border border-solid border-dark hover:scale-105 transition-all ease duration-200",
        // @ts-ignore
        props.className,
        active
          ? "bg-dark text-light dark:text-dark dark:bg-light"
          : "bg-light dark:bg-dark dark:text-light text-dark"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
