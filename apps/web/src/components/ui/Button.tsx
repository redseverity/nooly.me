import clsx from "clsx";

import { ComponentPropsWithRef } from "react";

const Button = ({ ...props }: ComponentPropsWithRef<"button">) => {
  return (
    <button
      {...props}
      role="button"
      className={clsx(
        `
        bg-gradient-to-b from-rose-2 to-rose-3
        hover:from-rose-1 hover:to-rose-2
        font-inter text-[13pt] w-min px-4 py-2
        font-semibold text-light-3 rounded-full
        flex flex-row items-center text-nowrap`,
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

export { Button };
