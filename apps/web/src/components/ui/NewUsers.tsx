import clsx from "clsx";

export const NewUsers = ({
  className,
  ...props
}: React.ComponentProps<"header">) => {
  const users = 1;

  return (
    <span
      {...props}
      role="figure"
      className={clsx(
        "font-poppins dark:text-light-1 text-dark-1 flex items-center justify-center gap-2 text-xs font-bold",
        className,
      )}
    >
      <p>
        <span className="text-rose-2">+</span>&nbsp;
        {users.toLocaleString("en-US") + "M"} Users
      </p>
    </span>
  );
};
