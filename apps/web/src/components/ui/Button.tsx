import Link from "next/link";

interface ButtonProps {
  children: string;
  className?: string;
  bg?: boolean;
  arrow?: boolean;
  type?: "button" | "reset" | "submit";
}

interface ButtonLinkProps extends Omit<ButtonProps, "type"> {
  link: string;
}

const Button = ({ children, className, arrow, type, bg }: ButtonProps) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${
        bg == true || bg == undefined
          ? `bg-gradient-to-b from-rose-200 to-rose-300
        hover:from-rose-100 hover:to-rose-200`
          : null
      } font-inter text-[13pt]
        font-semibold text-white-300 px-4 py-2 rounded-full
        flex flex-row justify-center items-center text-nowrap ${className}`}
    >
      <p className="translate-y-[-1px] translate-x-[-1px]">{children}</p>

      {arrow ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white-300 stroke-2 fill-none w-[18px] h-[24px] translate-x-[1px]"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      ) : null}
    </button>
  );
};

const ButtonLink = ({
  children,
  className,
  arrow,
  link,
  bg,
}: ButtonLinkProps) => {
  return (
    <Link
      href={`${link}`}
      className={`${
        bg == true || bg == undefined
          ? `bg-gradient-to-b from-rose-200 to-rose-300
        hover:from-rose-100 hover:to-rose-200`
          : null
      } font-inter text-[13pt]
        font-semibold text-white-300 px-4 py-2 w-min rounded-full
        flex flex-row justify-center items-center text-nowrap ${className}`}
    >
      <p className="translate-y-[-1px] translate-x-[-1px]">{children}</p>

      {arrow ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white-300 stroke-2 fill-none w-[18px] h-[24px] translate-x-[1px]"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      ) : null}
    </Link>
  );
};

export { Button, ButtonLink };
