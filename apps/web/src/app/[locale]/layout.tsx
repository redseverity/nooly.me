import { ThemeProvider } from "@/contexts";
import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/fonts.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Nooly.me",
  description:
    "Nooly is a powerful platform for fast image conversion, music and video downloads, and more.",
  icons: "/assets/favicon.ico",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body className="font-poppins bg-light-2 dark:bg-dark-2 h-auto w-dvw font-normal antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
