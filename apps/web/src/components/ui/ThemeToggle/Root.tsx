import clsx from "clsx";
import { useTranslations } from "next-intl";

export const Root = ({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) => {
  const t = useTranslations("ui.ThemeToggle");

  return (
    <button
      {...props}
      role="button"
      type="button"
      aria-label={t("description")}
      title={t("description")}
      className={clsx(
        `border-light-8 bg-light-2 dark:border-dark-8 btn-outline dark:bg-dark-2 flex size-8 items-center justify-center rounded-full border-[1px]`,
        className,
      )}
    >
      {children}
    </button>
  );
};
