import clsx from "clsx";
import { Menu as MenuOpenIcon } from "lucide-react";
import React from "react";

const MenuOpen = ({ className }: React.ComponentProps<typeof MenuOpenIcon>) => {
  return (
    <MenuOpenIcon
      className={clsx("stroke-dark-1 dark:stroke-light-1", className)}
    />
  );
};

export { MenuOpen };
