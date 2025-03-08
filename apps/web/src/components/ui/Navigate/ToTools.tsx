import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const ToTools = ({
  children,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  const t = useTranslations("Navigate.toTools");
  const locale = useLocale()

  return (
    <Link
      {...props}
      locale={locale}
      href="/tools"
      draggable="false"
      aria-label={t("description", { page: "tools" })}
      title={t("description", { page: "tools" })}
      className={clsx(
        "grad-button-rose hover:grad-button-rose-active text-light-1 font-inter flex h-9 w-full items-center justify-center text-nowrap rounded-full text-sm font-bold leading-none min-[500px]:gap-1",
        className,
      )}
    >
      <span className="flex items-center justify-center">
        {t("label")}
        {children}
      </span>
    </Link>
  );
};
