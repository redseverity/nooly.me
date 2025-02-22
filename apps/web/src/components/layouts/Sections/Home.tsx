import { Button, Section, NewUsers, Icons } from "@/components/ui";
import { ChevronRight } from "lucide-react";

export const Home = () => {
  return (
    <Section id="Home" className="mt-14 scroll-mt-14 gap-6 pb-10 pt-20">
      <NewUsers className="absolute right-[24px] top-[20px]" />

      <div className="flex w-[80%] flex-col items-center justify-center gap-4 text-center min-[700px]:w-[38rem]">
        <div className="flex flex-col items-center justify-center gap-2 min-[400px]:gap-3">
          <span
            className="from-rose-2 to-rose-3 block size-2 animate-bounce rounded-full bg-gradient-to-b min-[250px]:size-3 min-[400px]:size-4 min-[600px]:size-5"
            style={{ animationDuration: "1.5s" }}
          />
          <h1
            draggable="false"
            className="font-poppins text-dark-1 dark:text-light-1 text-nowrap text-[7vw] font-bold leading-tight min-[700px]:text-[40pt]"
          >
            <span>Explore</span>
            <span>&nbsp;the&nbsp;</span>
            <span className="gradient-text-rose">Simplicity</span>
            <span translate="no">.</span>
            <br />
            <span className="gradient-text-rose">Experience&nbsp;</span>
            <span>the Ease</span>
            <span translate="no">.</span>
          </h1>
        </div>

        <p className="dark:text-light-3 text-dark-3 font-inter text-[3vw] min-[600px]:text-[13pt] min-[700px]:text-[16pt]">
          Nooly is a powerful platform for fast image conversion, music and
          video downloads, and more.
        </p>
      </div>

      <Button
        title="Sign with the Google button"
        className="flex items-center justify-center px-2"
      >
        <Icons.google className="mr-2 h-7" />
        Sign with the google
        <ChevronRight className="stroke-light-1 h-[16px] stroke-[1.8] min-[340px]:h-[20px] min-[700px]:h-[28px]" />
      </Button>
    </Section>
  );
};
