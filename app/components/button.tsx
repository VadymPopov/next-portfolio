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
          "flex flex-row items-center justify-between hover:text-zinc-50 hover:border-transparent text-secondary transition duration-400",
        !git && "bg-gray-950 text-zinc-50",
        "glass py-2.5 px-5 text-base text-center font-medium rounded hover:bg-gray-500 transition"
      )}
      {...rest}>
      {children}
    </Link>
  );
};

export default Button;
