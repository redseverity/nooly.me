import Link from "next/link";
import { Card } from "../ui/Card";
import { Logo } from "../ui/Logo";
import { ChevronRight } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={`
        flex justify-center
        border-b-[1px] border-dark-800 bg-dark-200
        h-16 overflow-hidden w-screen fixed top-0 select-none
        ${className}`}
    >
      <div draggable="false" className="flex justify-between items-center h-full w-[75%]">
        <Logo />

          <nav
            className="h-[2.8rem] w-min p-[0px]
            justify-center items-center border border-dark-800
            rounded-full flex overflow-hidden 
            [&_*]:h-[2.8rem] [&_*]:w-[120px]
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
                  className="flex justify-center items-center
                hover:bg-gradient-to-b hover:from-rose-200 hover:to-rose-300
                text-white-300 text-nowrap font-inter font-semibold
                rounded-full"
                >
                  {e}
                </Link>
              );
            })}
          </nav>

        <Link
          href='/'
          draggable="false"
          className="
          flex justify-center items-center gap-1
          font-inter text-white-300 text-[12pt]
          h-16 w-min hover:text-rose-200 font-bold
          text-nowrap"
        >
          <div className="pl-2">My Account</div>
          <ChevronRight size={16} strokeWidth={3} className="translate-y-[1px]" />
        </Link>

        <Link
          href='/'
          draggable="false"
          className="
          flex justify-center items-center gap-1
          font-inter text-white-100 text-[14pt]
          h-[2.6rem] w-min px-4 py-2 font-bold
          text-nowrap rounded-full bg-gradient-to-b
          from-rose-200 to-rose-300 
          hover:from-rose-100 hover:to-rose-200"
        >
          <div className="pl-1">Get Started</div>
          <ChevronRight size={20} strokeWidth={3} />
        </Link>


      </div>
    </header>
  );
};

export { Header };
