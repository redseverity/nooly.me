import clsx from "clsx";
import Link from "next/link";

const NavAuthAccount = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  return (
    <>
      {["Log In", "Sign Up"].map((e, i) => {
        const page = e.replace(" ", "").toLowerCase();

        return(
        <Link
          {...props}
          key={i}
          href={page}
          aria-label={clsx("Navigate to the", page, "page")}
          title={clsx("Go to the", page, "page")}
          draggable="false"
          className={className}
        >
          {e}
        </Link>
        )
      })}
    </>
  );
};

export { NavAuthAccount };
