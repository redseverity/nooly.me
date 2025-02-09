"use client";

import { ThemeProvider as Provider } from "next-themes";

export const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof Provider>) => {
  return <Provider {...props}>{children}</Provider>;
};
