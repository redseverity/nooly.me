import Link from "next/link";

interface ButtonProps {
  text: string;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
  tabIndex?: number;
  type?: "button" | "reset" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonLinkProps extends Omit<ButtonProps, "type" | "onClick"> {
  link: string;
}

const Button = ({
  text,
  arrow,
  className,
  ariaLabel,
  tabIndex,
  type,
  onClick
}: ButtonProps) => {
  return (
    <button
      role="button"
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      type={type ? type : "button"}
      onClick={onClick}
      className={`
        bg-gradient-to-b from-rose-200 to-rose-300
        hover:from-rose-100 hover:to-rose-200
        font-inter text-[13pt] w-min
        font-semibold text-white-300 px-4 py-2 rounded-full
        flex flex-row items-center text-nowrap
        ${className}`
      }
    >
      <p className="translate-y-[-1px]">{text}</p>

      {arrow ? (
        <span className="translate-x-[-1px] w-[15px] h-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white-300 stroke-2 fill-none">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      ) : null}
    </button>
  );
};

const ButtonLink = ({
  text,
  arrow,
  className,
  link,
  ariaLabel,
  tabIndex,
}: ButtonLinkProps) => {
  return (
    <Link
      href={link}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      role="link"
      className={`
        bg-gradient-to-b from-rose-200 to-rose-300
        hover:from-rose-100 hover:to-rose-200
        font-inter text-[13pt] w-min
        font-semibold text-white-300 px-4 py-2 rounded-full
        flex flex-row justify-center items-center text-nowrap
        ${className}`
      }
    >
      <p className="translate-y-[-1px] translate-x-[-1px]">{text}</p>

      {arrow ? (
        <span className="translate-x-[-1px] w-[15px] h-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white-300 stroke-2 fill-none">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      ) : null}
    </Link>
  );
};

export { Button, ButtonLink };
