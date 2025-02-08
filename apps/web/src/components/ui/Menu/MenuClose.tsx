import clsx from "clsx";
import { X as MenuCloseIcon } from "lucide-react";

const MenuClose = ({
  className,
}: React.ComponentProps<typeof MenuCloseIcon>) => {
  return (
    <MenuCloseIcon
      className={clsx("stroke-dark-1 dark:stroke-light-1", className)}
    />
  );
};

export { MenuClose };
