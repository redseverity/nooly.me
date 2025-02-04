import { Logo, ThemeButton } from "../../ui";
import { MenuHeader } from "./ui";
import { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const Header = ({ ...props }: ComponentProps<"header">) => {
  return (
    <header
      {...props}
      className={clsx(
        `
        flex justify-center fixed top-0 select-none overflow-hidden w-full h-16 
        border-b-[1px] border-light-8 bg-light-2 dark:border-dark-8 dark:bg-dark-2 `,
        props.className,
      )}
    >
      <nav
        draggable="false"
        className="
          min-[1200px]:w-[65rem] min-[1000px]:w-[92vw] w-[90vw]
          flex justify-between items-center h-full
          "
      >
        <Link href="/" className="h-full flex items-center">
          <Logo
            className="max-[430px]:text-[15pt]"
            classNameSmile="max-[430px]:left-[-1px] max-[430px]:top-[-31px] max-[430px]:w-8"
          />
        </Link>

        <div
          className="
          min-[800px]:gap-6 gap-4
          flex justify-between items-center 
          "
        >
          <div
            className="
            max-[1100px]:hidden flex w-[380px] h-[38px]
            border border-light-8 dark:border-dark-8
            rounded-full overflow-hidden
            "
          >
            {["Home", "About", "Tools", "Contacts"].map((e, i) => {
              return (
                <Link
                  href={clsx("#" + e)}
                  key={i}
                  role="link"
                  draggable="false"
                  aria-label={clsx("Navigate to the", e, "section")}
                  title={clsx("Go to the", e, "section")}
                  className="
                  flex flex-grow justify-center items-center
                  hover:bg-light-5 text-dark-3
                  dark:hover:bg-dark-5 dark:text-light-3 text-nowrap
                  font-inter font-semibold h-full text-[11pt]
                  "
                >
                  {e}
                </Link>
              );
            })}
          </div>

          <div
            className="
            min-[800px]:flex hidden overflow-hidden
            rounded-full border-[1px]
            bg-light-2 border-light-8
            dark:bg-dark-2 dark:border-dark-8
            w-min h-[38px]"
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
                  className={`flex flex-grow font-inter z-50
                  justify-center items-center text-[11pt]
                  text-dark-3 hover:bg-light-5 px-[28px]
                  dark:text-light-3 dark:hover:bg-dark-5
                  font-semibold text-nowrap h-full`}
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
              min-[500px]:gap-[4px] min-[400px]:flex hidden 
              min-[500px]:text-[12pt] text-[10pt]
              min-[500px]:font-bold font-semibold
              min-[500px]:pl-[14px] min-[500px]:pr-[10px]
              h-[36px] w-min justify-center items-center

              font-inter text-light-1 
              text-nowrap rounded-full bg-gradient-to-b
              from-rose-2 to-rose-3 hover:from-rose-1
              hover:to-rose-2 pl-[8px] pr-[4px]"
          >
            <span lang="en" className="min-[500px]:pl-1 pl-2">
              Try for free
            </span>
            <ChevronRight className="min-[500px]:stroke-[2.3px] stroke-[2px]" />
          </Link>

          <ThemeButton />

          <MenuHeader />
        </div>
      </nav>
    </header>
  );
};

export { Header };
