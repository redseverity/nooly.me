import clsx from "clsx";
import { Moon as MoonIcon } from "lucide-react";

export const Moon = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <MoonIcon
      {...props}
      className={clsx("stroke-none fill-light-1 size-[22px]", className)}
    />
  );
};
