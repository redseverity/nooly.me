"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";

const ThemeProvider = ({
  ...props
}: ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>;
};

export { ThemeProvider };
