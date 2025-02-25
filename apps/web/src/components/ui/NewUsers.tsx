import clsx from "clsx";
import { useTranslations } from "next-intl";

export const NewUsers = ({
  className,
  ...props
}: React.ComponentProps<"header">) => {

  const t = useTranslations();

  return (
    <span
      {...props}
      role="figure"
      className={clsx(
        "font-poppins dark:text-light-1 text-dark-1 flex items-center justify-center gap-2 text-xs font-bold",
        className,
      )}
    >
      <p>
        <span className="text-rose-2">+</span>&nbsp;
        {t("NewUsers")}
      </p>
    </span>
  );
};
