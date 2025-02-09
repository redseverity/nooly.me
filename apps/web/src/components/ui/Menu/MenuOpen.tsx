import clsx from "clsx";
import { Menu as MenuOpenIcon } from "lucide-react";
import React from "react";

export const MenuOpen = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuOpenIcon>) => {
  return (
    <MenuOpenIcon { ...props } className={clsx("stroke-dark-1 dark:stroke-light-1", className)}
    />
  );
};
