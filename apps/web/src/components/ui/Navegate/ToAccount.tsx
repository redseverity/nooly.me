import clsx from "clsx";
import Link from "next/link";

const ToAccount = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  return (
    <Link
      {...props}
      key="Account"
      href="account/login"
      aria-label="Navigate to the login page"
      title="Go to the login page"
      draggable="false"
      className={clsx(
        "font-inter text-nowrap flex flex-1 justify-center items-center text-[11pt] text-dark-3 dark:text-light-3 rounded-full",
        className,
      )}
    >
      {"Accont"}
    </Link>
  );
};

export { ToAccount };
