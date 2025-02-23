"use client";

import { ThemeProvider } from "next-themes";

export default function NotFound() {
  return (
    <html
    lang="en"
    suppressHydrationWarning
    className="scroll-smooth"
  >
    <body className="font-poppins bg-light-2 dark:bg-dark-2 h-auto w-dvw font-normal antialiased">
    <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
    <main className="flex h-dvh flex-col items-center justify-center gap-4">
      <h2 className="text-center text-xl">
        {"Oops! We can't find that page."}
      </h2>
      <span className="text-xl">404</span>
    </main>
    </ThemeProvider>
    </body>
    </html>
  );
}
