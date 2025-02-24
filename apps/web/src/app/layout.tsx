import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/fonts.css";

export const metadata: Metadata = {
  title: "Nooly.me",
  description:
    "Nooly is a powerful platform for fast image conversion, music and video downloads, and more.",
  icons: "/assets/favicon.ico",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
