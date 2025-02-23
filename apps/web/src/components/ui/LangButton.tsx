"use client";

import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { Globe } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const LangButton = ({
  className,
  ...props
}: React.ComponentProps<"button">) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = `/${usePathname().split("/").filter(Boolean).slice(1)}`;

  return (
    <div className="relative">
      <button
        {...props}
        role="button"
        aria-label="Change Theme button"
        type="button"
        title="Change theme button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          `border-light-8 hover:border-dark-1 hover:bg-dark-1 bg-light-2 dark:border-dark-8 dark:hover:bg-dark-6 dark:bg-dark-2 group flex size-8 items-center justify-center rounded-full border-[1px]`,
          className,
        )}
      >
        <Globe className="stroke-dark-1 dark:stroke-light-1 group-hover:stroke-light-1 size-4" />
      </button>
      <span
        className={clsx(
          "border-light-8 dark:border-dark-8 bg-light-2 dark:bg-dark-2 top-11 translate-x-[-37%] rounded-lg border py-2",
          isOpen ? "absolute" : "hidden",
        )}
      >
        <nav>
          <ul className="font-inter [&>li:hover]:bg-dark-1 [&>li:hover]:dark:bg-dark-6 [&>li:hover]:text-light-2 flex flex-col justify-center px-2 [&_*]:rounded-md [&_*]:p-1 [&_*]:text-center">
            <li className="">
              <Link href={path} locale="pt">
                Portuguese
              </Link>
            </li>
            <li>
              <Link href={path} locale="en">
                English
              </Link>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
};
