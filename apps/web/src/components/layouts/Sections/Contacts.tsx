import { Navigate, Section, Icons } from "@/components/ui";
import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const providersIcons = {
  Github: Icons.github,
  Twitter: Icons.twitter,
  Email: Icons.email,
};

export const Contacts = () => {
  const t = useTranslations("Sections.Contacts");
  const locale = useLocale();

  const providers = [
    {
      id: "github",
      Icon: providersIcons.Github,
      link: "https://github.com/redseverity",
    },
    {
      id: "twitter",
      Icon: providersIcons.Twitter,
      link: "https://x.com/redseverity",
    },
    {
      id: "email",
      Icon: providersIcons.Email,
      link: "mailto:red.severity723@passfwd.com",
    },
  ];

  return (
    <Section
      id={t("id")}
      className="flex scroll-mt-14 flex-col gap-5 border-none py-12"
    >
      <h2
        className={clsx(
          "dark:text-light-2 text-dark-2 text-nowrap text-center font-semibold leading-tight min-[600px]:text-5xl min-[600px]:leading-tight",
          locale === "pt" ? "text-[2.5rem]" : "text-4xl",
        )}
      >
        {t.raw("h2")[0]}
        <br />
        {t.raw("h2")[1]}
      </h2>

      <div className="flex items-center justify-center">
        <Navigate.ToTools className="w-min px-4" />

        {/*
        <Navigate.ToTools className="pl-3 pr-2">
          <ChevronRight className="size-5 min-[500px]:size-6" />
        </Navigate.ToTools>
        */}
      </div>
      <div className="flex gap-6 pt-2">
        {providers.map(({ id, Icon, link }) => {
          return (
            <div key={id} className="bg-dark-2 dark:bg-light-2 rounded-full">
              <Link
                href={link}
                locale={locale}
                className="flex h-8 w-8 items-center justify-center"
              >
                <Icon />
              </Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
