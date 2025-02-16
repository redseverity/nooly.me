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
        "relative z-10 flex w-full flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
};
