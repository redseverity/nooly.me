import { AtSign } from "lucide-react";

export const email = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return <AtSign {...props} className="dark:stroke-dark-2 stroke-light-2" />;
};
