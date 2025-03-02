"use client";

import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export const LangButton = ({
  className,
  ...props
}: React.ComponentProps<"button">) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = `/${usePathname().split("/").filter(Boolean).slice(1)}`;
  const t = useTranslations();
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        {...props}
        role="button"
        type="button"
        aria-label={t("ButtonTitles.Language")}
        title={t("ButtonTitles.Language")}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          `btn-outline border-light-8 bg-light-2 dark:border-dark-8 dark:bg-dark-2 flex size-8 items-center justify-center rounded-full border-[1px]`,
          className,
        )}
      >
        <Globe className="stroke-dark-1 dark:stroke-light-1 size-4" />
      </button>
      {isOpen && (
        <span className="border-light-8 dark:border-dark-8 bg-light-2 dark:bg-dark-2 absolute top-11 translate-x-[-37%] rounded-lg border py-2">
          <nav>
            <ul className="font-inter [&>li:hover]:bg-dark-1 [&>li:hover]:dark:bg-dark-6 [&>li:hover]:text-light-2 flex flex-col justify-center px-2 [&_*]:rounded-md [&_*]:p-1 [&_*]:text-center">
              <li>
                <Link href={path} locale="pt">
                  {t("Languages.pt")}
                </Link>
              </li>
              <li>
                <Link href={path} locale="en">
                  {t("Languages.en")}
                </Link>
              </li>
            </ul>
          </nav>
        </span>
      )}
    </div>
  );
};
