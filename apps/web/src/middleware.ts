import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes } from "@/constants";
import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";

// language middleware
const middleware = createMiddleware(routing);

export default async function handle(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const { defaultLocale } = routing;

  // returns main page
  if (path === "/") {
    return NextResponse.rewrite(new URL(defaultLocale, req.url).toString());
  }

  // returns verify pages
  else if (
    !routes.find(
      (route) =>
        route === `/${path.split("/").filter(Boolean).slice(1).join("/")}`,
    )
  ) {
    return NextResponse.error();
  }

  return middleware(req);
}

export const config = {
  matcher: [
    "/((?!favicon.ico|fonts|assets|api|_next/static|_next/image|sitemap.xml|robots.txt).*)",
  ],
};
