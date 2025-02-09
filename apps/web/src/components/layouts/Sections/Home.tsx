import { Button, Section } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const Home = () => {
  return (
    <Section
      id="Home"
      className="min-[600px]:h-[80dvh] h-[60dvh] mt-16 pb-8 min-[400px]:gap-8 gap-4 scroll-mt-16 select-none"
    >
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

        <h2 className="min-[700px]:text-[14pt] min-[600px]:text-[10pt] text-[3vw] dark:text-light-4 text-dark-4 font-inter">
          Nooly is a powerful platform for fast image conversion, music and
          video downloads, and more.
        </h2>
      </div>

      <Button
        title="Sign with the Google button"
        className="min-[750px]:h-[48px] min-[610px]:h-[46px] min-[520px]:h-[42px] min-[460px]:h-[38px] min-[400px]:h-[36px] min-[340px]:h-[34px] min-[270px]:h-[32px] h-[30px] flex justify-center items-center px-2"
      >
        <span className="min-[750px]:size-[32px] min-[610px]:size-[30px] min-[520px]:size-[26px] min-[460px]:size-[24px] min-[400px]:size-[22px] min-[340px]:size-[20px] min-[270px]:size-[18px] size-[16px] min-[750px]:mr-[10px] min-[610px]:mr-[9px] min-[460px]:mr-[8px] min-[400px]:mr-[7px] min-[340px]:mr-[6px] min-[270px]:mr-[5px] mr-[4px] flex justify-center items-center">
          <Image
            draggable="false"
            src="/assets/google-icon.svg"
            alt="google icon"
            width={32}
            height={32}
          />
        </span>
        <p className="font-inter min-[750px]:text-[12pt] min-[610px]:text-[11pt] min-[460px]:text-[10pt] min-[340px]:text-[9pt] min-[270px]:text-[8pt] text-[7pt] text-light-1 font-bold">
          Sign with the google
        </p>

        <div className="h-full flex justify-center  items-center">
          <ChevronRight className="min-[750px]:size-[28px] min-[610px]:size-[26px] min-[520px]:size-[24px] min-[460px]:size-[22px] min-[400px]:size-[24px] min-[340px]:size-[18px] min-[270px]:size-[16px] stroke-[1.8] stroke-light-1" />
        </div>
      </Button>
    </Section>
  );
};
