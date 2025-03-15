import clsx from "clsx";
import { AtSign } from "lucide-react";

export const email = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return <AtSign {...props} className={clsx("dark:stroke-dark-2 stroke-light-2 w-5", className)} />;
};
