import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languages, routes } from "@/constants";
import { routing } from "./i18n/routing";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const { defaultLocale } = routing;

  // returns main page
  if (path === "/") {
    return NextResponse.rewrite(new URL(defaultLocale, req.url).toString());
  }

  // returns 404 not-found page
  else if (
    !languages.find((lang) => lang === path.split("/").filter(Boolean)[0])
  ) {
    return NextResponse.error();
  } else if (
    !routes.find(
      (route) =>
        route === `/${path.split("/").filter(Boolean).slice(1).join("/")}`,
    )
  ) {
    return NextResponse.error();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!favicon.ico|fonts|assets|api|_next/static|_next/image|sitemap.xml|robots.txt).*)",
  ],
};
