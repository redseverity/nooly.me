import { ThemeProvider } from "@/context/theme-provider";
import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/fonts.css";

export const metadata: Metadata = {
  title: "Nooly.me",
  description:
    "Nooly is a powerful platform for image conversion, fast music and video downloads and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-poppins font-normal bg-dark-2 dark:bg-light-2 h-screen w-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
