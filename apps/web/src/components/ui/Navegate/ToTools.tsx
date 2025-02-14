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
        "min-[500px]:gap-1 flex justify-center items-center h-[2.3rem] w-min rounded-full gradient-button hover:gradient-button-active min-[600px]:text-[13pt] min-[400px]:text-[10pt] text-[9pt] text-light-1 font-bold leading-none text-nowrap font-inter",
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
