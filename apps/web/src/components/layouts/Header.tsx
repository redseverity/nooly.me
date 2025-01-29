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
        <Link href="/">
          <Logo />
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
            w-min p-[0px]"
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
                  flex justify-center items-center
                  hover:text-rose-200 hover:font-bold
                  text-white-300 text-nowrap font-inter 
                  font-semibold rounded-full w-[100px] h-[2.8rem]"
                >
                  {e}
                </Link>
              );
            })}
          </div>

          <div
            className="
            screen-8:flex hidden
            bg-dark-200 rounded-full border-[1px]
            border-dark-800 min-w-[200px] px-2 h-[2.8rem]"
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
                  className="
                  flex font-inter text-white-300
                  text-[12pt] hover:text-rose-200
                  hover:font-bold font-semibold
                  text-nowrap w-1/2 h-[2.8rem]"
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
              gap-1 max-[360px]:hidden flex
              font-inter text-white-100 screen-8:text-[14pt] text-[11pt]
              screen-8:h-[2.7rem] h-[2.4rem] screen-8:w-40 w-[8rem] py-2 ml-2 font-bold
              text-nowrap rounded-full bg-gradient-to-b
              from-rose-200 to-rose-300 hover:from-rose-100
              hover:to-rose-200"
          >
            <div className="pl-1">Get Started</div>
            <ChevronRight size={20} strokeWidth={3} />
          </Link>

          <div
            className="
              screen-8:w-[2.6rem] w-[2.2rem] screen-8:h-[2.6rem] h-[2.2rem]
              max-[360px]:hidden flex justify-center items-center
              rounded-full border-[1px] border-dark-800"
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
