"use client";

import clsx from "clsx";
import { ChevronRight, Menu, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, ComponentProps } from "react";
import { createPortal } from "react-dom";

const MenuHeader = ({...props}: ComponentProps<'button'>) => {
  const [$isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [$menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);

  //logs
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(`variable $menuOpen is: ${$menuOpen}`);
    }
  }, [$menuOpen]);

  return (
    <>
    <button
      {...props}
      role="button">
      <Menu
        className={clsx("hidden max-[1100px]:flex stroke-light-1", props.className)}
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
                top-[-16rem] z-40 w-full fixed bg-dark-2
                border-b-[1px] border-dark-8 flex-col gap-4 py-4
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
                <div
                  className="w-[90vw] flex flex-col h-auto overflow-hidden"
                >
                  {["Home", "About", "Tools", "Contacts"].map((e, i) => {
                    return (
                      <Link
                        href={`#${e}`}
                        key={i}
                        role="link"
                        draggable="false"
                        aria-label={`Navigate to the ${e} section`}
                        title={`Go to the ${e} section`}
                        className="
                            flex flex-grow justify-between pl-[1.10rem] pr-[0.7rem] items-center
                            hover:bg-dark-5 text-light-3 text-nowrap text-[11pt]
                            font-inter font-semibold h-[2.7rem] rounded-full
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
            bg-dark-2 rounded-full border-[1px]
            border-dark-8 w-[90vw] h-[2.5rem]"
          >
            {["Log In", "Sign Up"].map((e, i) => {
              const page = e.replace(" ", "").toLowerCase();
              return (
                <Link
                  key={i}
                  href={page}
                  aria-label={`Navigate to the ${page} page`}
                  title={`Go to the ${page} page`}
                  draggable="false"
                  className={clsx(`
                  flex flex-1 justify-center items-center  font-inter text-light-3
                  text-[11pt] hover:bg-dark-5
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
            min-[410px]:h-[2.4rem] h-[2.3rem]
            w-[10rem]

            font-inter text-light-1 font-bold
            text-nowrap rounded-full bg-gradient-to-b
            from-rose-2 to-rose-3 hover:from-rose-1
            hover:to-rose-2"
          >
            <span lang="en" className="pl-1">
              Try for free
            </span>
            <ChevronRight className="stroke-[2px] size-5" />
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
