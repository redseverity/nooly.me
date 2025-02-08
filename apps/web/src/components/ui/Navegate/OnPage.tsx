import clsx from "clsx";
import Link from "next/link";

const OnPage = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  return (
    <>
      {["Home", "About", "Tools", "Contacts"].map((e, i) => {
        return (
          <Link
            {...props}
            href={`#${e}`}
            key={i}
            role="link"
            draggable="false"
            aria-label={clsx("Navigate to the", e, "section")}
            title={clsx("Go to the", e, "section")}
            className={clsx(
              "flex flex-grow justify-center items-center hover:bg-light-5 dark:hover:bg-dark-5 text-dark-3 dark:text-light-3 text-nowrap text-[11pt] font-inter font-semibold",
              className,
            )}
          >
            {e}
            {children}
          </Link>
        );
      })}
    </>
  );
};

export { OnPage };
