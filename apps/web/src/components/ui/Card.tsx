import clsx from "clsx";
import { ComponentProps } from "react";

const Card = ({ ...props }: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      role="group"
      className={clsx(`
        border-[1px] border-light-8 dark:border-dark-8
        w-min p-4 rounded-2xl`, props.className
      )}
    >
      {props.children}
    </div>
  );
};

export { Card };
