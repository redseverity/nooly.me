import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const ToSignup = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  const t = useTranslations();

  return (
    <Link
      {...props}
      key="Signup"
      href="signup"
      aria-label={t("ButtonTitles.Page", { page: "signup" })}
      title={t("ButtonTitles.Page", { page: "signup" })}
      draggable="false"
      className={clsx(
        "dark:hover:bg-dark-6 hover:bg-dark-1 text-dark-3 hover:text-light-1 dark:text-light-3 font-inter flex h-9 items-center justify-center text-nowrap rounded-full text-sm font-semibold",
        className,
      )}
    >
      {t("Navegate.ToSignup")}
    </Link>
  );
};
