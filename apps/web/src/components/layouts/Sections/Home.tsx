import { Section, NewUsers, Navigate } from "@/components/ui";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export const Home = () => {
  const t = useTranslations("Sections.Home");
  const locale = useLocale();

  return (
    <Section id={t("id")} className="mt-14 scroll-mt-14 gap-6 pb-10 pt-20">
      <NewUsers className="absolute right-[24px] top-[20px]" />

      <div className="flex w-[80%] flex-col items-center justify-center gap-4 text-center min-[700px]:w-[38rem]">
        <div className="flex flex-col items-center justify-center gap-2 min-[400px]:gap-3">
          <span
            className="from-rose-2 to-rose-3 block size-2 animate-bounce rounded-full bg-gradient-to-b min-[250px]:size-3 min-[400px]:size-4 min-[600px]:size-5"
            style={{ animationDuration: "1.5s" }}
          />
          <h1
            draggable="false"
            className={clsx(
              "font-poppins text-dark-1 dark:text-light-1 text-nowrap font-bold leading-tight min-[700px]:text-[40pt]",
              locale === "en" ? "text-[7vw]" : "text-[6.4vw]",
            )}
          >
            <span>{t.raw("h1")[0]}</span>
            <span>&nbsp;{t.raw("h1")[1]}&nbsp;</span>
            <span className="grad-text-rose">{t.raw("h1")[2]}</span>
            <span translate="no">.</span>
            <br />
            <span className="grad-text-rose">{t.raw("h1")[3]}&nbsp;</span>
            <span>{t.raw("h1")[4]}</span>
            <span translate="no">.</span>
          </h1>
        </div>

        <p className="dark:text-light-3 text-dark-3 font-inter text-[3vw] min-[600px]:text-[13pt] min-[700px]:text-[16pt]">
          {t("p")}
        </p>
      </div>

      <Navigate.ToTools className="w-min px-4" />

      {/*
      <Button
        title={t("signGoogle")}
        className="grad-button-rose hover:grad-button-rose-active text-light-3 flex items-center justify-center px-2"
      >
        <Icons.google className="mr-2 h-7" />
        {t("signGoogle")}
        <ChevronRight className="stroke-light-1 h-[16px] stroke-[1.8] min-[340px]:h-[20px] min-[700px]:h-[28px]" />
      </Button>
      */}
    </Section>
  );
};
