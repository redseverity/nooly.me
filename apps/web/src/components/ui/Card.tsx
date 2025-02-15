import clsx from "clsx";

export const Card = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      role="group"
      className={clsx(
        "border-light-8 dark:border-dark-8 rounded-2xl border-[1px]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
