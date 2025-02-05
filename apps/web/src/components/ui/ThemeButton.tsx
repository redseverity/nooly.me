"use client";

import clsx from "clsx";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = ({
  className,
  ...props
}: React.ComponentProps<"button">) => {
  const { theme, setTheme } = useTheme();

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <button
      {...props}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className={clsx(
        `
      w-[34px]
      h-[34px] 
      flex justify-center items-center
      rounded-full border-[1px]
      border-light-8 hover:bg-light-5 bg-light-2
      dark:border-dark-8 dark:hover:bg-dark-5 dark:bg-dark-2
      `,
        className,
      )}
    >
      {theme === "dark" ? (
        <Moon className="stroke-none fill-light-1 size-[20px]" />
      ) : (
        <SunDim className="size-[22px] stroke-dark-1" />
      )}
    </button>
  );
};

export { ThemeButton };
