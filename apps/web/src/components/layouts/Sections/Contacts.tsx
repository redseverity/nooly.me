import { Navegate, Section, Icons } from "@/components/ui";
import { ChevronRight, AtSign } from "lucide-react";
import Link from "next/link";

export const Contacts = () => {
  return (
    <Section id="Contacts" className="py-12 border-none scroll-mt-16">
      <h2 className="font-semibold min-[600px]:text-[40pt] min-[400px]:text-[30pt] text-[9.5vw] text-nowrap dark:text-light-2 text-dark-2 pb-6 text-center">
        Get Started with
        <br />
        Nooly Today
      </h2>

      <div className="flex gap-2 items-center justify-center">
        <Navegate.ToTools
          text="Get started now"
          className="py-5 pl-3 pr-2 min-[600px]:text-[13pt] min-[400px]:text-[11pt] text-[10pt]"
        >
          <ChevronRight className="min-[500px]:size-6 size-5" />
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
