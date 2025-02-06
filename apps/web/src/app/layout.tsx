import { ThemeProvider } from "@/contexts";
import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/fonts.css";

export const metadata: Metadata = {
  title: "Nooly.me",
  description:
    "Nooly is a powerful platform for fast image conversion, music and video downloads, and more.",
  icons: "/assets/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased font-poppins font-normal bg-light-2 dark:bg-dark-2 h-screen w-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
