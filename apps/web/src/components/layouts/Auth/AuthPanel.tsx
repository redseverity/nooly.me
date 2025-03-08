"use client";

import { Button, Card, Icons } from "@/components/ui";
import clsx from "clsx";
import { Mail } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { LoginWithEmail } from "./LoginWithEmail";
import { SignupWithEmail } from "./SignupWithEmail";
import { Link } from "@/i18n/routing";

const providersIcons = {
  Google: Icons.google,
  Twitter: Icons.twitter,
  Mail: Mail,
};

const AuthMethods = ["signup", "login"];

export const AuthPanel = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {

  const locale = useLocale()
  const path = usePathname().split("/")[2];
  const method = AuthMethods.find((method) => method === path);
  const t = useTranslations(`Auth.AuthPanel.${method}`);
  const router = useRouter();
  const urlParams = useSearchParams();

  const providers = [
    { id: "google", Icon: providersIcons.Google, label: t("label.Google") },
    { id: "twitter", Icon: providersIcons.Twitter, label: t("label.Twitter") },
    { id: "email", Icon: providersIcons.Mail, label: t("label.Email") },
  ];

  return (
    <div
      {...props}
      className={clsx(
        "flex h-full select-none items-center justify-center",
        className,
      )}
    >
      <Card className="font-inter bg-light-2 dark:bg-dark-2 z-10 flex h-[400px] w-[22rem] flex-col items-center justify-center gap-8 px-6 py-10">
        {/* Panel to choose the authentication method (email or other providers) */}
        {urlParams.get("via") !== "email" && (
          <>
            <h1 className="text-center text-xl">{t("h1")}</h1>
            <div className="flex w-full flex-col items-center justify-center gap-3">
              {providers.map(({ id, Icon, label }, index: number) => (
                <React.Fragment key={index}>
                  <Button
                    className={clsx(
                      "btn-outline border-light-8 dark:border-dark-8 dark:bg-dark-3 bg-light-3 flex h-12 !w-full flex-row justify-center border font-semibold",
                      id === "twitter" && "mb-1",
                    )}
                    onClick={() => {
                      router.push(
                        id === "email" && path === "signup"
                          ? `/signup?via=${id}&step=1`
                          : `/${path}?via=${id}`,
                      );
                    }}
                  >
                    <span className="text-dark-3 dark:text-light-3 flex items-center">
                      <Icon
                        className={clsx(
                          "mr-3 w-5",
                          id === "email" && "stroke-dark-2 dark:stroke-light-2",
                        )}
                      />
                      {label}
                    </span>
                  </Button>
                  {id === "google" && (
                    <span className="flex w-full items-center">
                      <span className="dark:bg-dark-8 bg-light-8 h-[1px] w-full"></span>
                      <p className="text-dark-3 dark:text-light-3 mx-2 leading-none">
                        {t("division")}
                      </p>
                      <span className="dark:bg-dark-8 bg-light-8 h-[1px] w-full"></span>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <Link
              locale={locale}
              href={method === "signup" ? "/login" : "/signup"}
              className="pt-1 text-sm leading-none"
            >
              {t.raw("link")[0]}&nbsp;
              <span className="text-rose-2 hover:text-rose-1 font-semibold">
                {t.raw("link")[1]}
              </span>
            </Link>
          </>
        )}
        {urlParams.get("via") === "email" && path === "login" && (
          <LoginWithEmail />
        )}
        {urlParams.get("via") === "email" && path === "signup" && (
          <SignupWithEmail />
        )}
      </Card>
    </div>
  );
};
