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
        "min-[500px]:gap-1 flex min-[500px]:text-[12pt] text-[11pt] leading-none font-bold min-[500px]:pl-[14px] min-[500px]:pr-[10px] h-[36px] w-min justify-center items-center font-inter text-light-1 text-nowrap rounded-full bg-gradient-to-b from-rose-2 to-rose-3 hover:from-rose-1 hover:to-rose-2 pl-[8px] pr-[4px]",
        className,
      )}
    >
      <span lang="en" className="min-[500px]:pl-1 pl-2">
        {text}
      </span>
      {children}
    </Link>
  );
};
