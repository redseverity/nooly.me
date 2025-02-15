import clsx from "clsx";

export const Root = ({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      role="button"
      aria-label="Change Theme button"
      type="button"
      title="Change theme button"
      className={clsx(
        `border-light-8 hover:border-dark-1 hover:bg-dark-1 bg-light-2 dark:border-dark-8 dark:hover:bg-dark-6 dark:bg-dark-2 group flex size-8 items-center justify-center rounded-full border-[1px]`,
        className,
      )}
    >
      {children}
    </button>
  );
};
