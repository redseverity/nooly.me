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
              className="py-4 flex justify-center items-center bg-gradient-to-b dark:from-dark-3 dark:to-dark-2 from-light-3 to-light-2 hover:dark:from-dark-5 hover:dark:to-dark-5 hover:from-light-5 hover:to-light-5"
              key={i}
            >
              <div className="flex items-center min-[600px]:gap-3 min-[250px]:gap-2 gap-1 w-[80%]">
                {Icon && (
                  <Icon className="min-[700px]:size-8 size-[4vw] stroke-rose-2" />
                )}
                <h3 className="text-center dark:text-light-2 text-dark-2 min-[700px]:text-[14pt] min-[330px]:text-[2.8vw] text-[2.4vw] font-semibold text-nowrap leading-none">
                  {label}
                </h3>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
