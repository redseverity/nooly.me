import clsx from "clsx";

export const Section = ({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section
      {...props}
      role="group"
      className={clsx(
        "border-light-8 dark:border-dark-8 relative z-10 flex w-full flex-col items-center justify-center border-b-[1px]",
        className,
      )}
    >
      {children}
    </section>
  );
};
