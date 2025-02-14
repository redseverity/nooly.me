import clsx from "clsx";
import Link from "next/link";

interface ToToolsProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  text: string;
}

export const ToTools = ({
  text,
  children,
  className,
  ...props
}: ToToolsProps) => {
  return (
    <Link
      {...props}
      href="/tools"
      draggable="false"
      aria-label="Navigate to the tools page"
      title="Go to the tools page"
      className={clsx(
        "min-[500px]:gap-1 flex justify-center items-center leading-none font-bold h-[2.3rem] w-min font-inter text-light-1 text-nowrap rounded-full bg-gradient-to-b from-rose-2 to-rose-3 hover:from-rose-1 hover:to-rose-2",
        className,
      )}
    >
      <span className="flex justify-center items-center">
        {text}
        {children}
      </span>
    </Link>
  );
};
