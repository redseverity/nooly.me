import { Card, Section } from "@/components/ui";
import {
  FileVideo,
  FileMusic,
  FileImage,
  Scaling,
  QrCode,
  FileText,
  LucideIcon,
} from "lucide-react";

export const Tools = () => {
  const tools: Array<[string, LucideIcon?]> = [
    ["Dowload Video", FileVideo],
    ["Dowload Music", FileMusic],
    ["Image Converter", FileImage],
    ["Resize Image", Scaling],
    ["QR Code Generator", QrCode],
    ["Remove metadate", FileText],
  ];

  return (
    <Section
      id="Tools"
      className="min-[600px]:pt-14 min-[600px]:pb-20 pt-10 pb-16 min-[600px]:gap-6 gap-2 scroll-mt-16"
    >
      <h2 className="font-semibold min-[800px]:text-[40pt] min-[600px]:text-[7vw] text-[7vw] text-nowrap dark:text-light-2 text-dark-2 pb-6">
        Start Now<span className="text-rose-2">!</span>
      </h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 min-[750px]:w-[42rem] min-[330px]:w-[88vw] w-[86vw]">
        {tools.map(([label, Icon], i) => {
          return (
            <Card
              className="
              py-4 flex justify-center items-center
              dark:bg-dark-3 hover:dark:bg-dark-6 bg-light-3 hover:bg-dark-1
              text-dark-2 hover:text-light-1 dark:text-light-2"
              key={i}
            >
              <span
                className="
                flex items-center min-[600px]:gap-3 min-[250px]:gap-2 gap-1 w-[80%]
                min-[700px]:text-[14pt] min-[330px]:text-[2.8vw] text-[2.4vw]
                font-semibold text-nowrap leading-none
                ">
                {Icon && (
                  <Icon className="min-[700px]:size-8 size-[4vw] stroke-rose-2" />
                )}
                  {label}
              </span>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
