import clsx from "clsx";
import { X as MenuCloseIcon } from "lucide-react";

export const Close = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuCloseIcon>) => {
  return (
    <MenuCloseIcon
      {...props}
      className={clsx("stroke-dark-1 dark:stroke-light-1 size-7", className)}
    />
  );
};
