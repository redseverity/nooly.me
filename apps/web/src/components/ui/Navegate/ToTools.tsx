import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ToToolsProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  text: string;
}

export const ToTools = ({
  text,
  children,
  className,
  ...props
}: ToToolsProps) => {
  const t = useTranslations();

  return (
    <Link
      {...props}
      href="/tools"
      draggable="false"
      aria-label={t("ButtonTitles.Page", { page: "tools" })}
      title={t("ButtonTitles.Page", { page: "tools" })}
      className={clsx(
        "gradient-button hover:gradient-button-active text-light-1 font-inter flex h-9 w-full items-center justify-center text-nowrap rounded-full text-sm font-bold leading-none min-[500px]:gap-1",
        className,
      )}
    >
      <span className="flex items-center justify-center">
        {text}
        {children}
      </span>
    </Link>
  );
};
