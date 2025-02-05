"use client";

import clsx from "clsx";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MenuHeader = ({ ...props }: React.ComponentProps<"button">) => {
  const [$isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const [$menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);

  return (
    <>
      <button {...props} role="button">
        <Menu
          className={clsx(
            "hidden max-[1100px]:flex stroke-dark-1 dark:stroke-light-1",
            props.className,
          )}
          onClick={() => setMenuOpen(!$menuOpen)}
        />
      </button>

      {$isClient
        ? createPortal(
            <>
              <style>
                {`
                @keyframes openMenu {
                    0% {
                        top: -16rem
                    }
                    100% {
                        top: 4rem
                    }
                }

                @keyframes closeMenu {
                    0% {
                        top: 4rem
                    }
                    100% {
                        top: -16rem
                    }
                }`}
              </style>
              <aside
                className="
                hidden max-[1100px]:flex
                top-[-16rem] z-40 w-full fixed border-b-[1px]
                bg-light-2 border-light-8
                dark:bg-dark-2 dark:border-dark-8
                flex-col gap-4 py-4
                items-center justify-center
                "
                style={{
                  animation:
                    $menuOpen !== undefined
                      ? $menuOpen
                        ? "openMenu 0.2s linear forwards"
                        : "closeMenu 0.2s linear forwards"
                      : "",
                }}
              >
                <div className="w-[90vw] flex flex-col h-auto overflow-hidden">
                  {["Home", "About", "Tools", "Contacts"].map((e, i) => {
                    return (
                      <Link
                        href={`#${e}`}
                        key={i}
                        role="link"
                        draggable="false"
                        aria-label={clsx("Navigate to the", e, "section")}
                        title={clsx("Go to the", e, "section")}
                        className="
                        flex flex-grow justify-between pl-[1.10rem] pr-[0.7rem] items-center
                        hover:bg-light-5 text-dark-3
                        dark:hover:bg-dark-5 dark:text-light-3
                        text-nowrap text-[11pt]
                        font-semibold h-[2.7rem] rounded-full
                        "
                      >
                        {e}

                        <ChevronRight className="stroke-[2px] size-5" />
                      </Link>
                    );
                  })}
                </div>

                <div
                  className="
                  min-[800px]:hidden flex overflow-hidden
                  rounded-full border-[1px]
                  bg-light-2 border-light-8
                  dark:bg-dark-2 dark:border-dark-8
                  w-[90vw] h-[2.5rem]
                  "
                >
                  {["Log In", "Sign Up"].map((e, i) => {
                    const page = e.replace(" ", "").toLowerCase();
                    return (
                      <Link
                        key={i}
                        href={page}
                        aria-label={clsx("Navigate to the", page, "page")}
                        title={clsx("Go to the", page, "page")}
                        draggable="false"
                        className={clsx(
                          `
                        flex flex-1 justify-center items-center text-[11pt]
                        text-dark-3 hover:bg-light-5 font-inter
                        dark:text-light-3 dark:hover:bg-dark-5
                        font-semibold text-nowrap h-full`,
                          e == "Log In" ? "pl-1" : "pr-1",
                        )}
                      >
                        {e}
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/tools"
                  draggable="false"
                  aria-label="Navigate to the tools page"
                  title="Go to the tools page"
                  className="
                  min-[410px]:gap-1 min-[400px]:hidden flex justify-center items-center
                  min-[500px]:text-[12pt] text-[11pt]
                  h-[38px]
                  w-min px-4

                  font-inter text-light-1 font-semibold
                  text-nowrap rounded-full bg-gradient-to-b
                  from-rose-2 to-rose-3 hover:from-rose-1
                  hover:to-rose-2"
                >
                  <span lang="en" className="pl-1">
                    Try for free
                  </span>
                  <ChevronRight className="stroke-[2px] h-[20px]" />
                </Link>
              </aside>
            </>,
            document.body,
          )
        : null}
    </>
  );
};

export { MenuHeader };
