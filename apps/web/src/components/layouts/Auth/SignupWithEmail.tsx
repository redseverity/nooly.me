"use client";

import { Button } from "@/components/ui";
import { Link } from "@/i18n/routing";
import { Lock, AtSign } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

export const SignupWithEmail = () => {
  const t = useTranslations("Auth.SignupWithEmail");
  const locale = useLocale();
  const router = useRouter();
  const urlParams = useSearchParams();
  return (
    <>
      {urlParams.get("step") === "1" && (
        <>
          {/* Enter with your email step 1*/}
          <h1 className="text-center text-xl">{t("email.h1")}</h1>
          <form role="form" className="flex w-full flex-col items-center gap-4">
            <div className="flex w-full items-center justify-center">
              <div className="border-light-8 dark:border-dark-8 flex h-11 items-center justify-center rounded-full rounded-br-none rounded-tr-none border pl-3 pr-2">
                <AtSign className="stroke-dark-2 dark:stroke-light-2 size-4" />
              </div>
              <input
                type="text"
                placeholder={t("email.placeholder")}
                className="border-light-8 dark:border-dark-8 dark:bg-dark-3 bg-light-3 flex h-11 !w-full flex-row justify-center rounded-full rounded-bl-none rounded-tl-none border px-3 focus:outline-none"
              />
            </div>

            <Button
              type="button"
              onClick={() => {
                router.push(`/signup?via=email&step=2`);
              }}
              className="grad-button-rose text-light-2 flex !w-full items-center justify-center"
            >
              {t("email.continue")}
            </Button>
          </form>
          <Link
            locale={locale}
            href="/signup"
            className="mt-1 text-sm leading-none"
          >
            <span className="text-rose-2 hover:text-rose-1 font-semibold">
              {t("goBack")}
            </span>
          </Link>
        </>
      )}
      {urlParams.get("step") === "2" && (
        <>
          {/* Enter verification code step 2 */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="pt-1 text-center text-xl">{t("code.h1")}</h1>
            <p className="text-dark-8 dark:text-light-3 text-center text-sm">
              {t("code.p")}
            </p>
          </div>
          <form role="form" className="flex w-full flex-col items-center gap-4">
            <div className="flex w-full items-center justify-center">
              <input
                type="text"
                placeholder={t("code.placeholder")}
                className="border-light-8 dark:border-dark-8 dark:bg-dark-3 bg-light-3 flex h-11 !w-full flex-row justify-center rounded-full border px-3 text-center tracking-widest focus:outline-none"
              />
            </div>

            <Button
              type="button"
              onClick={() => {
                router.push(`/signup?via=email&step=3`);
              }}
              className="grad-button-rose text-light-2 flex !w-full items-center justify-center"
            >
              {t("code.verify")}
            </Button>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button className="text-sm font-normal leading-none">
                {"Didn't receive the code?"}&nbsp;
                <span className="text-rose-2 hover:text-rose-1 font-semibold">
                  {"Resend"}
                </span>
              </Button>

              <Link
                locale={locale}
                href="/signup?via=email&step=1"
                className="mt-1 text-sm leading-none"
              >
                <span className="text-rose-2 hover:text-rose-1 font-semibold">
                  {t("goBack")}
                </span>
              </Link>
            </div>
          </form>
        </>
      )}
      {urlParams.get("step") === "3" && (
        <>
          {/* Enter with your password step 3*/}
          <h1 className="text-center text-xl">{"Enter with your password"}</h1>
          <form role="form" className="flex w-full flex-col items-center gap-4">
            <div className="flex w-full items-center justify-center">
              <div className="border-light-8 dark:border-dark-8 flex h-11 items-center justify-center rounded-full rounded-br-none rounded-tr-none border pl-3 pr-2">
                <Lock className="stroke-dark-2 dark:stroke-light-2 size-4" />
              </div>
              <input
                type="text"
                placeholder="Password*"
                className="border-light-8 dark:border-dark-8 dark:bg-dark-3 bg-light-3 flex h-11 !w-full flex-row justify-center rounded-full rounded-bl-none rounded-tl-none border px-3 focus:outline-none"
              />
            </div>

            <Button
              type="button"
              className="grad-button-rose text-light-2 flex !w-full items-center justify-center"
            >
              {t("password.continue")}
            </Button>
          </form>
          <Link
            locale={locale}
            href="/signup?via=email&step=2"
            className="mt-1 text-sm leading-none"
          >
            <span className="text-rose-2 hover:text-rose-1 font-semibold">
              {t("goBack")}
            </span>
          </Link>
        </>
      )}
    </>
  );
};
