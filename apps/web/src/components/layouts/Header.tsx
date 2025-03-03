"use client";

import clsx from "clsx";
import Link from "next/link";
import { MenuToggle, LanguageSwitcher, ThemeToggle } from "@/components/ui";
import { Icons } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import { Navigate } from "@/components/ui";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Header = ({
  className,
  ...props
}: React.ComponentProps<"header">) => {
  const [isClient, setClient] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setClient(true);
  }, []);

  const [menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);

  return (
    <>
      <header
        {...props}
        className={clsx(
          "bg-light-2 dark:bg-dark-2 border-light-8 dark:border-dark-8 fixed top-0 flex h-14 w-full select-none justify-center border-b-[1px]",
          className,
        )}
      >
        <nav
          draggable="false"
          className="flex h-full w-[90vw] items-center justify-between min-[1000px]:w-[92vw] min-[1200px]:w-[65rem]"
        >
          <Link href="/">
            <Icons.logo className="h-8" />
          </Link>

          <div className="border-light-8 dark:border-dark-8 ml-10 mr-[1.10rem] hidden h-9 flex-1 rounded-full border min-[1000px]:flex min-[1100px]:ml-20">
            <Navigate.ToPage className="flex-1 rounded-full" />
          </div>

          <div className="flex items-center justify-center gap-4 min-[580px]:gap-5">
            <Navigate.ToAuth className="w-min rounded-full px-6 py-2 max-[700px]:hidden" />

            <div>
              <Navigate.ToTools className="pl-3 pr-1 max-[600px]:hidden">
                <ChevronRight className="stroke-light-1 h-[20px] w-min stroke-[1.8] min-[700px]:h-[28px]" />
              </Navigate.ToTools>
            </div>

            {isClient && (
              <ThemeToggle.Root
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                {theme == "dark" ? <ThemeToggle.Moon /> : <ThemeToggle.Sun />}
              </ThemeToggle.Root>
            )}

            <LanguageSwitcher />

            <MenuToggle.Root
              onClick={() => setMenuOpen(!menuOpen)}
              className="min-[1000px]:hidden [&_*]:flex"
            >
              {menuOpen ? <MenuToggle.Close /> : <MenuToggle.Open />}
            </MenuToggle.Root>
          </div>
        </nav>
      </header>

      {isClient
        ? createPortal(
            <>
              <style>
                {
                  "@keyframes openMenu { 0%{top: -17rem} 100%{top: 3.5rem}} @keyframes closeMenu {0% {top: 3.5rem} 100% {top: -17rem}}"
                }
              </style>
              <aside
                className="bg-light-2 border-light-8 border-b-1 dark:bg-dark-2 dark:border-dark-8 fixed top-[-17rem] z-40 flex w-full flex-col items-center justify-center gap-4 py-4 min-[1100px]:hidden"
                style={{
                  animation:
                    menuOpen !== undefined
                      ? menuOpen
                        ? "openMenu 0.2s linear forwards"
                        : "closeMenu 0.2s linear forwards"
                      : "",
                }}
              >
                <div className="flex h-auto w-[90vw] flex-col">
                  <Navigate.ToPage
                    onClick={() => setMenuOpen(false)}
                    className="font-poppins h-[2.7rem] justify-between rounded-full pl-[1.10rem] pr-[0.7rem] font-semibold"
                  >
                    <ChevronRight className="size-5 stroke-[2px]" />
                  </Navigate.ToPage>
                </div>

                <div className="flex w-[90vw] flex-col justify-center gap-4">
                  <Navigate.ToAuth className="dark:bg-dark-2 border-light-8 dark:border-dark-8 rounded-full border-[1px] min-[700px]:hidden" />

                  <Navigate.ToTools className="min-[600px]:hidden"/>
                </div>
              </aside>
            </>,
            document.body,
          )
        : null}
    </>
  );
};
