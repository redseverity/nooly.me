"use client";

import { Button, Card, Icons } from "@/components/ui";
import clsx from "clsx";
import { Mail as mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const providersIcons = {
  Google: Icons.google,
  Twitter: Icons.twitter,
  Mail: mail,
};

const AuthMethods = ["signup", "login"];

export const AuthPanel = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const path = usePathname().split("/")[2];

  const method = AuthMethods.find((method) => method === path);

  const t = useTranslations(`Account.${method}`);

  const providers = [
    { Icon: providersIcons.Google, label: t("label.Google") },
    { Icon: providersIcons.Twitter, label: t("label.X") },
    { Icon: providersIcons.Mail, label: t("label.Email") },
  ];

  return (
    <div
      {...props}
      className={clsx(
        "flex h-full select-none items-center justify-center",
        className,
      )}
    >
      <Card className="bg-light-2 dark:bg-dark-2 z-10 flex w-[22rem] flex-col items-center justify-center gap-8 px-6 py-10">
        <h1 className="text-center text-xl">{t("h1")}</h1>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          {providers.map(({ Icon, label }, index: number) => (
            <React.Fragment key={index}>
              <Button className="btn-outline border-light-8 dark:border-dark-8 dark:bg-dark-3 bg-light-3 flex h-12 !w-full flex-row justify-center rounded-xl border">
                <span className="text-dark-3 dark:text-light-3 flex items-center">
                  <Icon
                    className={clsx(
                      "mr-4 w-5",
                      index === 2 ? "stroke-dark-2 dark:stroke-light-2" : null,
                    )}
                  />
                  {label}
                </span>
              </Button>
              {index === 0 ? (
                <span className="flex w-full items-center">
                  <span className="dark:bg-dark-8 bg-light-8 h-[1px] w-full"></span>
                  <p className="text-dark-3 dark:text-light-3 mx-2">or</p>
                  <span className="dark:bg-dark-8 bg-light-8 h-[1px] w-full"></span>
                </span>
              ) : null}
            </React.Fragment>
          ))}
        </div>
        <Link
          href={method == "signup" ? "/login" : "/signup"}
          className="font-inter pt-1 text-sm"
        >
          {t.raw("link")[0]}
          <span className="text-rose-2 hover:text-rose-1 font-semibold">
            {" "}
            {t.raw("link")[1]}
          </span>
        </Link>
      </Card>
    </div>
  );
};
