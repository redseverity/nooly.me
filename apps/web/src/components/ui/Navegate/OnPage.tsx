import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export const OnPage = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  const t = useTranslations();

  return (
    <>
      {t.raw("Navegate.OnPage").map((e: string, i: number) => {
        return (
          <Link
            {...props}
            href={`#${e}`}
            key={i}
            role="link"
            draggable="false"
            aria-label={t("ButtonTitles.Section", { section: e })}
            title={t("ButtonTitles.Section", { section: e })}
            className={clsx(
              "btn-outline text-dark-3 dark:text-light-3 font-inter flex items-center justify-center text-nowrap text-sm font-semibold",
              className,
            )}
          >
            {e}
            {children}
          </Link>
        );
      })}
    </>
  );
};
