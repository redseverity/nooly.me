"use client";

import clsx from "clsx";
import Link from "next/link";
import { Logo, Menu, ThemeButton } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import { Navegate } from "@/components/ui";
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
          "flex justify-center fixed top-0 w-full h-16  bg-light-2 dark:bg-dark-2  border-b-[1px] border-light-8 dark:border-dark-8 select-none overflow-hidden",
          className,
        )}
      >
        <nav
          draggable="false"
          className="min-[1200px]:w-[65rem] min-[1000px]:w-[92vw] w-[90vw] flex justify-between items-center h-full"
        >
          <Link href="#Home">
            <Logo
              className="max-[430px]:text-[15pt]"
              classNameSmile="max-[430px]:left-[-1px] max-[430px]:top-[-31px] max-[430px]:w-8"
            />
          </Link>

          <div className="min-[1000px]:flex hidden flex-grow w-[380px] h-[38px] border border-light-8 dark:border-dark-8 rounded-full overflow-hidden min-[1100px]:ml-20 ml-10 mr-[1.10rem]">
            <Navegate.OnPage />
          </div>

          <div className="flex justify-center items-center min-[580px]:gap-5 gap-4">
            <Navegate.ToAccount className="max-[580px]:hidden w-min py-2 px-6 rounded-full" />

            <Navegate.ToTools
              text="Try for free"
              className="max-[400px]:hidden pl-3 pr-1"
            >
              <ChevronRight className="size-6" />
            </Navegate.ToTools>

            {isClient && (
              <ThemeButton.Root
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                <ThemeButton.Moon
                  className={clsx(theme == "dark" ? null : "hidden")}
                />
                <ThemeButton.Sun
                  className={clsx(theme == "light" ? null : "hidden")}
                />
              </ThemeButton.Root>
            )}

            <Menu.Root onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <Menu.Close className="min-[1000px]:hidden flex" />
              ) : (
                <Menu.Open className="min-[1000px]:hidden flex" />
              )}
            </Menu.Root>
          </div>
        </nav>
      </header>

      {isClient
        ? createPortal(
            <>
              <style>
                {
                  "@keyframes openMenu { 0%{top: -16rem} 100%{top: 4rem}} @keyframes closeMenu {0% {top: 4rem} 100% {top: -16rem}}"
                }
              </style>
              <aside
                className="min-[1100px]:hidden flex top-[-16rem] z-40 w-full fixed border-b-[1px] bg-light-2 border-light-8 dark:bg-dark-2 dark:border-dark-8 flex-col gap-4 py-4 items-center justify-center"
                style={{
                  animation:
                    menuOpen !== undefined
                      ? menuOpen
                        ? "openMenu 0.2s linear forwards"
                        : "closeMenu 0.2s linear forwards"
                      : "",
                }}
              >
                <div className="w-[90vw] flex flex-col h-auto overflow-hidden">
                  <Navegate.OnPage
                    onClick={() => setMenuOpen(false)}
                    className="justify-between pl-[1.10rem] pr-[0.7rem] font-poppins font-semibold h-[2.7rem] rounded-full"
                  >
                    <ChevronRight className="stroke-[2px] size-5" />
                  </Navegate.OnPage>
                </div>

                <div className="min-[580px]:hidden flex overflow-hidden bg-light-2 dark:bg-dark-2 rounded-full border-[1px] border-light-8 dark:border-dark-8 w-[90vw] h-[2.5rem]">
                  <Navegate.ToAccount />
                </div>

                <Navegate.ToTools
                  text="Try for free"
                  className="w-[88vw] h-[2.5rem] min-[400px]:hidden"
                >
                  <ChevronRight className="stroke-[2px]" />
                </Navegate.ToTools>
              </aside>
            </>,
            document.body,
          )
        : null}
    </>
  );
};
