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
        "h-4 hover:scale-105 group gradient-button hover:gradient-button-active font-inter w-min dark:text-light-3 rounded-full flex flex-row items-center text-nowrap min-[600px]:text-[13pt] min-[400px]:text-[11pt] text-[8pt] text-light-1 font-bold leading-none",
        className,
      )}
    >
      {children}
    </button>
  );
};

export { Button };
