import { ComponentProps } from "react";

interface LogoProps extends ComponentProps<"span"> {
  className?: string;
  classNameSmile?: string;
}

const Logo = ({ className, classNameSmile }: LogoProps) => {
  return (
    <span
      role="none"
      className={`
            text-light-200 text-2xl font-poppins
            font-bold w-min h-9 block
            ${className}`}
    >
      Nooly<span className="text-rose-200 font-poppins">.</span>me
      <svg
        className={`relative left-[-2px] top-[-36px] w-10 fill-light-200 ${classNameSmile}`}
        viewBox="0 0 40 40"
      >
        <path
          d="M39.5505 31.3055C38.8617 32.2162 37.7652
        32.8052 36.5302 32.8052C34.4452 32.8052
        32.755 31.1264 32.755 29.0554C32.755
        29.0553 32.755 29.0552 32.755
        29.0551C32.2809 29.6819 32 30.461
        32 31.3053C32 33.3763 33.6902 35.0551
        35.7753 35.0551C37.8602 35.0551 39.5504
        33.3764 39.5505 31.3055Z"
        />
      </svg>
    </span>
  );
};

export { Logo };
