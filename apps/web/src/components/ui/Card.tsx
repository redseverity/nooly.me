import clsx from "clsx";
import { ComponentProps } from "react";

const Card = ({ ...props }: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      role="group"
      className={clsx(`w-min p-4 border-[1px] border-dark-8`, props.className)}
    >
      {props.children}
    </div>
  );
};

export { Card };
