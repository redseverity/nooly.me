"use client";

import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentProps, useEffect, useState } from "react";

const ThemeButton = ({ ...props }: ComponentProps<"button">) => {
  const { theme, setTheme } = useTheme();

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <button
      {...props}
      className="
              min-[400px]:w-[40px] w-[35px]
              min-[400px]:h-[40px] h-[35px] 
              flex justify-center items-center
              rounded-full border-[1px] border-dark-8 hover:bg-dark-5"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <Moon className="stroke-none fill-light-1 size-5" />
      ) : (
        <SunDim className="size-6 stroke-light-1" />
      )}
    </button>
  );
};

export { ThemeButton };
