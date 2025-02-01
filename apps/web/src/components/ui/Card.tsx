import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

const Card = ({ ...props }: ComponentPropsWithRef<"div">) => {
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
