"use client";

import { Button } from "@/components/ui";
import { Link } from "@/i18n/routing";
import { Lock, AtSign } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import React from "react";

const providersIcons = {
  Lock: Lock,
  AtSign: AtSign,
};

export const LoginWithEmail = () => {
  const locale = useLocale()
  const t = useTranslations(`Auth.LoginWithEmail`);

  const formProviders = [
    {
      id: "email",
      Icon: providersIcons.AtSign,
      placeholder: t("email.placeholder"),
    },
    {
      id: "password",
      Icon: providersIcons.Lock,
      placeholder: t("password.placeholder"),
    },
  ];

  return (
    <>
      <h1 className="text-center text-xl">{t("h1")}</h1>
      <form role="form" className="flex w-full flex-col items-center gap-4">
        {formProviders.map(({ id, Icon, placeholder }) => {
          return (
            <div key={id} className="flex w-full items-center justify-center">
              <div className="border-light-8 dark:border-dark-8 flex h-11 items-center justify-center rounded-full rounded-br-none rounded-tr-none border pl-3 pr-2">
                <Icon className="stroke-dark-2 dark:stroke-light-2 size-4" />
              </div>
              <input
                type="text"
                placeholder={placeholder}
                className="border-light-8 dark:border-dark-8 dark:bg-dark-3 bg-light-3 flex h-11 !w-full flex-row justify-center rounded-full rounded-bl-none rounded-tl-none border px-3 focus:outline-none"
              />
            </div>
          );
        })}
        {/* password tip
        <ul className="w-full text-sm [&>li]:ml-4 [&>li]:list-disc">
          <li>Between 8 to 100 characters</li>
          <li>At least 1 number</li>
          <li>At least 1 lowercase letter</li>
          <li>At least 1 uppercase letter</li>
          <li>At least 1 special character</li>
        </ul>
        */}
        <Button
          type="button"
          className="grad-button-rose text-light-2 flex !w-full items-center justify-center"
        >
          {"login"}
        </Button>
      </form>

      <Link locale={locale} href="/login" className="pt-1 text-sm leading-none">
        <span className="text-rose-2 hover:text-rose-1 font-semibold">
          {"Go back"}
        </span>
      </Link>
    </>
  );
};
