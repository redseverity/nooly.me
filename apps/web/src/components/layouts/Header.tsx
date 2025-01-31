import Link from "next/link";
import { Logo } from "../ui/Logo";
import { ChevronRight, Menu, Moon } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={`
        flex justify-center select-none
        border-b-[1px] border-dark-800 bg-dark-200
        h-16 overflow-hidden w-screen fixed top-0 
        ${className}`}
    >
      <nav
        draggable="false"
        className="
          flex justify-between items-center h-full
          screen-12:w-[65rem] screen-10:w-[94%] w-[88%]"
      >
        <Link href="/" className="h-full flex items-center">
          <Logo
            className="max-[400px]:text-[15pt]"
            classNameSmile="max-[400px]:left-[-3px] max-[400px]:top-[-33px] max-[400px]:w-[35px]"
          />
        </Link>

        <div
          className="
          flex justify-between items-center gap-4 screen-8:gap-6 
          [&_*]:justify-center [&_*]:items-center"
        >
          <div
            className="
            max-[1100px]:hidden flex justify-center
            items-center border border-dark-800
            rounded-full overflow-hidden h-[2.8rem]
            p-[0px] w-[400px]"
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
                  className={`
                  flex flex-grow justify-center items-center
                  hover:bg-dark-400
                  text-white-300 text-nowrap font-inter 
                  font-semibold h-full
                  `}
                >
                  {e}
                </Link>
              );
            })}
          </div>

          <div
            className="
            screen-8:flex hidden overflow-hidden
            bg-dark-200 rounded-full border-[1px]
            border-dark-800 w-[200px] h-[2.8rem]"
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
                  className={`
                  flex flex-1 font-inter text-white-300
                  text-[12pt] hover:bg-dark-400
                  font-semibold text-nowrap h-full
                  ${e == "Log In" ? "pl-1" : "pr-1"}
                  `}
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
              font-inter text-white-100 font-bold

              min-[800px]:text-[14pt] min-[410px]:text-[11pt] text-[9pt]
              min-[800px]:h-[2.7rem] min-[410px]:h-[2.5rem] h-[2.3rem]
              min-[800px]:w-[10rem] min-[410px]:w-[8rem] w-[6rem]

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
              screen-8:w-[2.6rem] w-[2.2rem] screen-8:h-[2.6rem] h-[2.2rem]
              max-[380px]:hidden flex justify-center items-center 
              rounded-full border-[1px] border-dark-800 hover:bg-dark-400"
          >
            <Moon className="stroke-none fill-white-100" />
          </div>

          <Menu className="hidden max-[1100px]:flex stroke-white-100" />
        </div>
      </nav>
    </header>
  );
};

export { Header };
