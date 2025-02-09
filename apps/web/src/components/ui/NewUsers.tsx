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
        "flex justify-center items-center font-bold gap-2 font-poppins dark:text-light-1 text-dark-1 min-[750px]:text-[9pt] min-[520px]:text-[8pt] text-[7pt]",
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
