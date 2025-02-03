import { GridBg } from "@/components/layouts/GridBg";
import { Header } from "@/components/layouts/Header";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function App() {
  return (
    <>
      <GridBg className="z-0 stroke-light-4 dark:stroke-dark-4 fixed" />

      <Header className="z-50" />

      <main>
        <Section className="h-[30rem] mt-16 scroll-mt-16" id="Home">
          <div
            className="
            min-[750px]:w-[35rem]
            min-[580px]:w-[30rem]
            min-[500px]:w-[25rem]
            min-[400px]:w-[21rem]
            min-[330px]:w-[18rem]
            w-[12rem]
            flex
            flex-col
            justify-center
            items-center
            [&_*]:text-center"
          >
            <h1
              className="
              min-[750px]:text-[68pt]
              min-[580px]:text-[55pt]
              min-[500px]:text-[45pt]
              min-[400px]:text-[40pt]
              min-[330px]:text-[35pt]
              min-[330px]:text-nowrap
              max-[330px]:leading-[3.3rem]
              max-[330px]:mb-2
              text-[40pt]
              font-bold font-poppins
              text-dark-1
              dark:text-light-1"
            >
              <span className="gradient-text-rose">Online </span>Tools
            </h1>

            <p
              className="
              min-[750px]:text-[14pt]
              min-[580px]:text-[12pt]
              min-[500px]:text-[11pt]
              min-[400px]:text-[9pt]
              min-[330px]:text-[8pt]
              min-[750px]:translate-y-[-1.40rem]
              min-[580px]:translate-y-[-1rem]
              min-[500px]:translate-y-[-0.6rem]
              min-[400px]:translate-y-[-0.6rem]
              min-[330px]:translate-y-[-0.4rem]
              translate-y-[0.3rem]
              dark:text-light-3
              text-dark-3 
              text-[10pt]
              font-inter"
            >
              Nooly is a powerful platform for image conversion, fast music
              video downloads and more.
            </p>
          </div>

          <Button
            className="
            min-[750px]:h-[46px]
            min-[580px]:h-[44px]
            min-[500px]:h-[40px]
            min-[400px]:h-[36px]
            min-[750px]:translate-y-[-0.4rem]
            min-[580px]:translate-y-[-0.2rem]
            min-[500px]:translate-y-[0.1rem]
            min-[400px]:translate-y-[0.2rem]
            min-[330px]:translate-y-[0.4rem]
            translate-y-[1.5rem]
            flex
            justify-center
            items-center
            h-[34px]
            mb-14
            px-2"
          >
            <span
              className="
              min-[750px]:size-[32px]
              min-[600px]:size-[30px]
              min-[500px]:size-[26px]
              min-[400px]:size-[22px]
              size-[20px]
              min-[750px]:mr-[10px]
              min-[600px]:mr-[9px]
              min-[500px]:mr-[8px]
              min-[400px]:mr-[7px]
              flex
              justify-center
              items-center 
              mr-[6px]"
            >
              <Image
                src="/assets/google-icon.svg"
                alt="google icon"
                width={32}
                height={32}
              />
            </span>
            <p
              className="
              text-nowrap
              font-inter
              min-[750px]:text-[12pt]
              min-[500px]:text-[10pt]
              min-[400px]:text-[8pt]
              min-[330px]:text-[6pt]
              text-[8pt]
              text-light-1
              font-bold"
            >
              Sign with the google
            </p>

            <div
              className="
              min-[750px]:size-[32px]
              min-[600px]:size-[28px]
              min-[500px]:size-[26px]
              min-[400px]:size-[22px]
              size-[20px]
              flex justify-center 
              items-center"
            >
              <ChevronRight
                className="
                min-[750px]:size-[28px]
                min-[600px]:size-[26px]
                min-[500px]:size-[24px]
                min-[400px]:size-[22px]
                stroke-[1.8]
                stroke-light-1"
              />
            </div>
          </Button>
        </Section>
      </main>
    </>
  );
}
