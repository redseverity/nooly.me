import { Navegate, Section, Icons } from "@/components/ui";
import clsx from "clsx";
import { ChevronRight, AtSign } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

export const Contacts = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Section
      id={t.raw("Navegate.OnPage")[3]}
      className="scroll-mt-14 border-none py-12"
    >
      <h2
        className={clsx(
          "dark:text-light-2 text-dark-2 text-nowrap pb-6 text-center font-semibold leading-tight min-[600px]:text-5xl min-[600px]:leading-tight",
          locale === "pt" ? "text-[2.5rem]" : "text-4xl",
        )}
      >
        {t.raw("Contacts.h2")[0]}
        <br />
        {t.raw("Contacts.h2")[1]}
      </h2>

      <div className="flex items-center justify-center gap-2">
        <Navegate.ToTools
          text={t.raw("Navegate.ToTools")[1]}
          className="pl-3 pr-2"
        >
          <ChevronRight className="size-5 min-[500px]:size-6" />
        </Navegate.ToTools>

        <Link href="https://github.com/redseverity">
          <Icons.github />
        </Link>
        <Link href="https://x.com/redseverity">
          <Icons.twitter />
        </Link>
        <Link href='mailto:red.severity723@passfwd.com"'>
          <AtSign className="size-[1.7rem]" />
        </Link>
      </div>
    </Section>
  );
};
