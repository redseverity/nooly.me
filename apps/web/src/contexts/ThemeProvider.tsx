"use client";

import { ThemeProvider as Provider } from "next-themes";

interface ProviderProps extends React.ComponentProps<typeof Provider> {
  children: React.ReactNode;
}

const ThemeProvider = ({ children, ...props }: ProviderProps) => {
  return <Provider {...props}>{children}</Provider>;
};

export { ThemeProvider };
