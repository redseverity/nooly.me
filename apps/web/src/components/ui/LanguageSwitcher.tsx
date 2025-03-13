"use client";

import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { languages } from "@/constants/languages";
import React from "react";

export const LanguageSwitcher = ({
  className,
  ...props
}: React.ComponentProps<"button">) => {
  const locale = useLocale();
  const path = `/${usePathname().split("/").filter(Boolean).slice(1)}`;
  const t = useTranslations("ui.LanguageSwitcher");

  // Close menu when clicking outiside
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutsideRef = useRef<(event: MouseEvent) => void>(null);
  const handleScrollRef = useRef<() => void>(null);

  // update only logic without recreating event listeners
  useEffect(() => {
    handleClickOutsideRef.current = (event: MouseEvent) => {
      if (
        menuOpen === true &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    handleScrollRef.current = () => {
      if (menuOpen === true) {
        setMenuOpen(false);
      }
    };
  }, [menuOpen]);

  // initialize event listeners only once
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) =>
      handleClickOutsideRef.current?.(event);
    const handleScroll = () => handleScrollRef.current?.();

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <button
        {...props}
        role="button"
        type="button"
        aria-label={t("description")}
        title={t("description")}
        onClick={() => setMenuOpen(!menuOpen)}
        className={clsx(
          `btn-outline border-light-8 bg-light-2 dark:border-dark-8 dark:bg-dark-2 flex size-8 items-center justify-center rounded-full border-[1px]`,
          className,
        )}
      >
        <Globe className="stroke-dark-1 dark:stroke-light-1 size-4" />
      </button>
      {menuOpen && (
        <div
          ref={menuRef}
          className="border-light-8 dark:border-dark-8 bg-light-2 dark:bg-dark-2 absolute top-11 translate-x-[-37%] rounded-lg border py-2"
        >
          <nav>
            <ul className="font-inter flex flex-col justify-center gap-2 px-2">
              {/* check if already contains location, to economize requests*/}
              {languages.map((lang: string, index: number) => {
                return (
                  <React.Fragment key={lang}>
                    <li
                      className={clsx(
                        "flex flex-row items-center justify-center gap-2 rounded-md px-2 py-1",
                        locale === lang && "bg-dark-1 dark:bg-dark-6",
                      )}
                    >
                      {locale === lang ? (
                        <span className="text-light-1">
                          {t(`languages.${lang}`)}
                        </span>
                      ) : (
                        <Link href={path} locale={lang}>
                          {t(`languages.${lang}`)}
                        </Link>
                      )}
                    </li>
                    {index + 1 < languages.length && (
                      <span className="bg-light-8 dark:bg-dark-8 h-[1px] w-full" />
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
