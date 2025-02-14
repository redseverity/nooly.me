import clsx from "clsx";
import { SunDim } from "lucide-react";

export const Sun = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <SunDim
      {...props}
      className={clsx(
        "size-[24px] stroke-dark-1 group-hover:stroke-light-1",
        className,
      )}
    />
  );
};
