import Link from "next/link";
import { ComponentProps } from "react";
import { Logo } from "../ui/Logo";
import { ChevronRight, Menu, Moon, ArrowRight } from "lucide-react";
import clsx from "clsx";

const Header = ({ ...props }: ComponentProps<"header">) => {
  return (
    <header
      {...props}
      className={clsx(
        `
        flex justify-center fixed top-0 select-none overflow-hidden
        border-b-[1px] border-dark-800 bg-dark-200 w-full h-16 `,
        props.className,
      )}
    >
      <nav
        draggable="false"
        className="
          min-[1200px]:w-[65rem] min-[1000px]:w-[92%] w-[88%]
          flex justify-between items-center h-full w
          "
      >
        <Link href="/" className="h-full flex items-center">
          <Logo
            className="max-[400px]:text-[15pt]"
            classNameSmile="max-[400px]:left-[-1px] max-[400px]:top-[-31px] max-[400px]:w-8"
          />
        </Link>

        <div
          className="
          min-[800px]:gap-6 gap-4
          flex justify-between items-center 
          [&_*]:justify-center [&_*]:items-center"
        >
          <div
            className="
            max-[1100px]:hidden flex w-[25rem] h-[2.8rem]
            border border-dark-800
            rounded-full overflow-hidden
            "
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
                  flex flex-grow justify-center items-center
                  hover:bg-dark-400 text-light-300 text-nowrap
                  font-inter font-semibold h-full
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
            bg-dark-200 rounded-full border-[1px]
            border-dark-800 w-[12.5rem] h-[2.8rem]"
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
                  className={clsx(
                    `
                  flex flex-1 font-inter text-light-300
                  text-[12pt] hover:bg-dark-400
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
              min-[410px]:gap-1 max-[280px]:hidden flex
              min-[800px]:text-[14pt] min-[410px]:text-[11pt] text-[9pt]
              min-[800px]:h-[2.7rem] min-[410px]:h-[2.5rem] h-[2.3rem]
              min-[800px]:w-[10rem] min-[410px]:w-[8rem] w-[6rem]

              font-inter text-light-100 font-bold
              text-nowrap rounded-full bg-gradient-to-b
              from-rose-200 to-rose-300 hover:from-rose-100
              hover:to-rose-200"
          >
            <div className="pl-1">Try for Free</div>
            <ChevronRight
              size={20}
              className="min-[410px]:stroke-[3px] stroke-[2px]"
            />
          </Link>

          <div
            className="
              min-[800px]:w-[2.6rem] w-[2.2rem]
              min-[800px]:h-[2.6rem] h-[2.2rem]
              max-[380px]:hidden flex
              
              justify-center items-center
              rounded-full border-[1px] border-dark-800 hover:bg-dark-400"
          >
            <Moon className="stroke-none fill-light-100" />
          </div>

          <Menu className="hidden max-[1100px]:flex stroke-light-100" />
        </div>
      </nav>
    </header>
  );
};

export { Header };
