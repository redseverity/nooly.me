import clsx from "clsx";
import Link from "next/link";

const NavPage = ({
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
            className={className}
          >
            {e}
            {children}
          </Link>
        );
      })}
    </>
  );
};

export { NavPage };
