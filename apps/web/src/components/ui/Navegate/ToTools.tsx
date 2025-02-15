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
        "gradient-button hover:gradient-button-active text-light-1 font-inter flex h-9 w-full items-center justify-center text-nowrap rounded-full text-sm font-bold leading-none min-[500px]:gap-1",
        className,
      )}
    >
      <span className="flex items-center justify-center">
        {text}
        {children}
      </span>
    </Link>
  );
};
