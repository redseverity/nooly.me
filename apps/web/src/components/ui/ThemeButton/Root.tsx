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
        `w-[34px] h-[34px]
        flex justify-center items-center 
        rounded-full border-[1px] border-light-8 hover:border-dark-1
        hover:bg-dark-1 bg-light-2 group
        dark:border-dark-8 dark:hover:bg-dark-6 dark:bg-dark-2`,
        className,
      )}
    >
      {children}
    </button>
  );
};
