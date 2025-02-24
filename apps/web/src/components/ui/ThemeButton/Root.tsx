import clsx from "clsx";
import { useTranslations } from "next-intl";

export const Root = ({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) => {
  const t = useTranslations("ButtonTitles");

  return (
    <button
      {...props}
      role="button"
      type="button"
      aria-label={t("Theme")}
      title={t("Theme")}
      className={clsx(
        `border-light-8 hover:border-dark-1 hover:bg-dark-1 bg-light-2 dark:border-dark-8 dark:hover:bg-dark-6 dark:bg-dark-2 group flex size-8 items-center justify-center rounded-full border-[1px]`,
        className,
      )}
    >
      {children}
    </button>
  );
};
