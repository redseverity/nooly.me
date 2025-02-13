import clsx from "clsx";
import Link from "next/link";

export const ToAccount = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  return (
    <Link
      {...props}
      key="Account"
      href="account"
      aria-label="Navigate to the login page"
      title="Go to the login page"
      draggable="false"
      className={clsx(
        `flex flex-1 justify-center items-center h-full
         dark:hover:bg-dark-6 hover:bg-dark-1 rounded-full
         text-dark-3 hover:text-light-1 dark:text-light-3 text-[11pt] 
         font-inter text-nowrap font-semibold`,
        className,
      )}
    >
      {"Accont"}
    </Link>
  );
};
