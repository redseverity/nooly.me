import clsx from "clsx";

const Button = ({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      role="button"
      className={clsx(
        "gradient-button hover:gradient-button-active font-inter dark:text-light-3 text-light-1 group flex h-10 w-min flex-row items-center text-nowrap rounded-full text-sm font-bold leading-none",
        className,
      )}
    >
      {children}
    </button>
  );
};

export { Button };
