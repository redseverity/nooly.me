import clsx from "clsx";

const NewUsers = ({ className, ...props }: React.ComponentProps<"span">) => {
  const users = 12635;

  return (
    <span
      {...props}
      className={clsx(
        `
        flex
        justify-center
        items-center
        font-bold
        gap-2
        font-poppins
        dark:text-light-1
        text-dark-1
        text-[10pt]
            `,
        className,
      )}
    >
      <p>
        {users.toLocaleString("en-US")} New Users{" "}
        <span className="text-rose-2">+</span>
      </p>
    </span>
  );
};

export { NewUsers };
