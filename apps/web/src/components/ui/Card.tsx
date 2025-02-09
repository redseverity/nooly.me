import clsx from "clsx";

export const Card = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      role="group"
      className={clsx(
        "border-[1px] border-light-8 dark:border-dark-8 p-4 rounded-2xl",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
