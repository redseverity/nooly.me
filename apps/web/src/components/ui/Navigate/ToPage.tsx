import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";

interface Labels {
  Home: string;
  About: string;
  Tools: string;
  Contacts: string;
}

export const ToPage = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  const t = useTranslations("Navigate.toPage");
  const labels: Labels = t.raw("labels") as Labels;
  const locale = useLocale();

  return (
    <>
      {Object.entries(labels).map(([key, label]) => {
        return (
          <Link
            {...props}
            locale={locale}
            href={`/#${label}`}
            key={key}
            role="link"
            draggable="false"
            aria-label={t("description", { section: label })}
            title={t("description", { section: label })}
            className={clsx(
              "btn-outline text-dark-3 dark:text-light-3 font-inter flex items-center justify-center text-nowrap text-sm font-semibold",
              className,
            )}
          >
            {label}
            {children}
          </Link>
        );
      })}
    </>
  );
};
