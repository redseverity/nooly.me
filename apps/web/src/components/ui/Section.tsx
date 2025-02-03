import clsx from "clsx";
import { ComponentProps } from "react";

const Section = ({
  children,
  className,
  ...props
}: ComponentProps<"section">) => {
  return (
    <section
      {...props}
      className={clsx(
        `
        z-10
        w-full
        flex
        justify-center
        items-center
        flex-col
        border-b-[1px]
        border-light-8
        dark:border-dark-8
        relative
        `,
        className,
      )}
    >
      {children}
    </section>
  );
};

export { Section };
