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
      className="scroll-mt-16 gap-2 pb-10 pt-10 min-[600px]:gap-6"
    >
      <h2 className="dark:text-light-2 text-dark-2 text-nowrap pb-8 text-3xl font-semibold min-[600px]:text-5xl">
        Start Now<span className="text-rose-2">!</span>
      </h2>
      <div className="grid w-[86vw] grid-cols-2 gap-4 max-[600px]:grid-cols-1 min-[330px]:w-[88vw] min-[750px]:w-[42rem]">
        {tools.map(([label, Icon], i) => {
          return (
            <Card
              className="dark:bg-dark-3 hover:dark:bg-dark-6 bg-light-3 hover:bg-dark-1 text-dark-2 hover:text-light-1 dark:text-light-2 flex items-center justify-center py-4"
              key={i}
            >
              <span className="flex w-[88%]  items-center gap-1 text-nowrap text-sm font-semibold leading-none min-[250px]:gap-2 min-[600px]:gap-3 min-[600px]:text-lg">
                {Icon && (
                  <Icon className="stroke-rose-2 size-4 min-[600px]:size-6" />
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
