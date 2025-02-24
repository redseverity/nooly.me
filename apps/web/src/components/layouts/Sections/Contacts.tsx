import { Navegate, Section, Icons } from "@/components/ui";
import { ChevronRight, AtSign } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Contacts = () => {
  const t = useTranslations("Navegate");

  return (
    <Section id={t.raw("OnPage")[3]} className="scroll-mt-14 border-none py-12">
      <h2 className="dark:text-light-2 text-dark-2 text-nowrap pb-6 text-center text-4xl font-semibold leading-tight min-[600px]:text-5xl min-[600px]:leading-tight">
        Get Started with
        <br />
        Nooly Today
      </h2>

      <div className="flex items-center justify-center gap-2">
        <Navegate.ToTools text="Get started now" className="pl-3 pr-2">
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
