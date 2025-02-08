import { Button, Section } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <Section
      id="Home"
      className="scroll-mt-16 min-[750px]:h-[33rem] min-[580px]:h-[32rem] min-[500px]:h-[32rem] min-[400px]:h-[32rem] min-[340px]:h-[30rem] h-[24rem] select-none min-[750px]:pb-8 min-[580px]:pb-12 min-[400px]:pb-14 min-[330px]:pb-10 pb-[2rem] mt-16 main-[400px]:gap-8 gap-6"
    >
      <div className="min-[750px]:w-[44rem] min-[610px]:w-[35rem] min-[520px]:w-[30rem] min-[460px]:w-[27rem] min-[400px]:w-[22rem] min-[340px]:w-[19rem] min-[270px]:w-[16rem] w-[12rem] flex gap-6 flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center min-[400px]:gap-3 gap-2">
          <span
            className="min-[600px]:size-5 min-[400px]:size-4 min-[250px]:size-3 size-2 rounded-full  bg-gradient-to-b  from-rose-2  to-rose-3  block animate-bounce"
            style={{ animationDuration: "1.5s" }}
          />
          <h1
            draggable="false"
            className="min-[750px]:text-[45pt] min-[610px]:text-[41pt] min-[520px]:text-[35pt] min-[460px]:text-[30pt] min-[400px]:text-[26pt] min-[340px]:text-[22pt] min-[270px]:text-[18pt] text-[14pt] font-bold font-poppins text-dark-1 dark:text-light-1 leading-tight"
          >
            Explore
            <br />
            the&nbsp;<span className="gradient-text-rose">Simplicity</span>.
            <br />
            <span className="gradient-text-rose">Experience</span>
            &nbsp;the&nbsp;Ease.
            <style>
              {"@keyframes stretch { 0%{width: 0rem;} 100%{width: 100%;}}"}
            </style>
            <span
              className=" min-[340px]:border-b-[4px] w-[0rem] border-b-[2px] border-rose-2 pt-[6px] block"
              style={{ animation: "stretch 16s linear infinite alternate" }}
            />
          </h1>
        </div>

        <h2 className="min-[750px]:text-[16pt] min-[610px]:text-[14pt] min-[520px]:text-[12pt] min-[460px]:text-[11pt] min-[400px]:text-[10pt] min-[340px]:text-[8pt] min-[270px]:text-[6pt] text-[5pt] dark:text-light-4 text-dark-4 font-inter">
          Nooly is a powerful platform for fast image conversion, music and
          video downloads, and more.
        </h2>
      </div>

      <div className="flex justify-center items-center flex-col gap-4">
        <Button className="min-[750px]:h-[48px] min-[610px]:h-[46px] min-[520px]:h-[42px] min-[460px]:h-[38px] min-[400px]:h-[36px] min-[340px]:h-[34px] min-[270px]:h-[32px] h-[30px] flex justify-center items-center px-2">
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
      </div>
    </Section>
  );
};

export { HomeSection };
