import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  route: string;
  children: React.ReactNode;
  git?: boolean;
  download?: boolean;
}

const Button = ({ route, children, git, download, ...rest }: ButtonProps) => {
  return (
    <Link
      href={route}
      download
      className={clsx(
        git &&
          "flex flex-row items-center justify-between border-black border-2 hover:text-zinc-50 hover:border-transparent ",
        !git && "py-2.5 px-5 bg-gray-900 text-zinc-50",
        "py-2.5 px-5 text-base text-center font-medium rounded hover:bg-gray-800"
      )}
      {...rest}>
      {children}
    </Link>
  );
};

export default Button;
