import { ComponentProps } from "react";

interface ButtonProps {
  text?: string;
  arrow?: boolean;
  className?: string;
}

const Button = ({
  text,
  arrow,
  className,
  ...props
}: ButtonProps & ComponentProps<"button">) => {
  return (
    <button
      {...props}
      role="button"
      className={`
        bg-gradient-to-b from-rose-200 to-rose-300
        hover:from-rose-100 hover:to-rose-200
        font-inter text-[13pt] w-min
        font-normal text-white-300 px-4 py-2 rounded-full
        flex flex-row items-center text-nowrap
        ${className}`}
    >
      {text}
      {arrow ? (
        <span className="translate-x-[-1px] w-[15px] h-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white-300 stroke-2 fill-none w-0 h-0"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      ) : null}
    </button>
  );
};

export { Button };
