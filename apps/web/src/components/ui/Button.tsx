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
        "leading-none bg-gradient-to-b from-rose-2 h-4 to-rose-3 hover:from-rose-1 hover:to-rose-2 font-inter text-[13pt] w-min font-semibold text-dark-3 dark:text-light-3 rounded-full flex flex-row items-center text-nowrap",
        className,
      )}
    >
      {children}
    </button>
  );
};

export { Button };
