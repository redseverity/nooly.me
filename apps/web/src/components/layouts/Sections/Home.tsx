import { Button, Section, NewUsers, Icons } from "@/components/ui";
import { ChevronRight } from "lucide-react";

export const Home = () => {
  return (
    <Section
      id="Home"
      className="min-[600px]:h-[80dvh] h-[60dvh] mt-16 pb-8 min-[400px]:gap-8 gap-4 scroll-mt-16"
    >
      <NewUsers className="absolute top-[20px] right-[24px]" />

      <div className="min-[700px]:w-[38rem] min-[600px]:w-[32rem] w-[86%] flex gap-4 flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center min-[400px]:gap-3 gap-2">
          <span
            className="min-[600px]:size-5 min-[400px]:size-4 min-[250px]:size-3 size-2 rounded-full  bg-gradient-to-b  from-rose-2  to-rose-3  block animate-bounce"
            style={{ animationDuration: "1.5s" }}
          />
          <h1
            draggable="false"
            className="text-nowrap min-[700px]:text-[40pt] min-[600px]:text-[34pt] text-[7.6vw] font-bold font-poppins text-dark-1 dark:text-light-1 leading-tight"
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

        <p className="min-[700px]:text-[16pt] min-[600px]:text-[13pt] text-[3.5vw] dark:text-light-3 text-dark-3 font-inter">
          Nooly is a powerful platform for fast image conversion, music and
          video downloads, and more.
        </p>
      </div>

      <Button
        title="Sign with the Google button"
        className="min-[600px]:py-6 min-[400px]:py-5 py-4 flex justify-center items-center px-2"
      >
        <Icons.google className="min-[600px]:h-[30px] min-[400px]:h-[26px] h-[20px] ml-[2px] mr-2" />

       <span className="group-hover:translate-y-[-1px]">
          Sign with the google
        </span>

          <ChevronRight className="min-[700px]:h-[28px] min-[340px]:h-[20px] h-[16px] stroke-[1.8] stroke-light-1" />
      </Button>
    </Section>
  );
};
