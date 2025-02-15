import clsx from "clsx";
import { SunDim } from "lucide-react";

export const Sun = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <SunDim
      {...props}
      className={clsx(
        "stroke-dark-1 group-hover:stroke-light-1 size-5",
        className,
      )}
    />
  );
};
