import { Button, Card, Section } from "@/components/ui";
import {
  FileVideo,
  FileMusic,
  FileImage,
  Scaling,
  QrCode,
  FileText,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const Tools = () => {
  const providers = [
    { Icon: FileVideo },
    { Icon: FileMusic },
    { Icon: FileImage },
    { Icon: Scaling },
    { Icon: QrCode },
    { Icon: FileText },
  ];

  const t = useTranslations("Sections.Tools");

  return (
    <Section
      id={t("id")}
      className="scroll-mt-16 gap-2 pb-4 pt-10 min-[600px]:gap-6"
    >
      <h2 className="dark:text-light-2 text-dark-2 text-nowrap pb-8 text-3xl font-semibold min-[600px]:text-5xl">
        {t("h2")}
        <span className="text-rose-2">!</span>
      </h2>
      <div className="grid w-[86vw] grid-cols-2 gap-5 max-[700px]:grid-cols-1 min-[330px]:w-[88vw] min-[750px]:w-[42rem]">
        {t.raw("cards.labels").map((label: string, index: number) => {
          const { Icon } = providers[index];

          return (
            <Card
              className="dark:bg-dark-3 bg-light-3 btn-outline flex items-center justify-center py-3 min-[600px]:py-4"
              key={index}
            >
              <Button className="flex w-[88%] items-center gap-1 text-nowrap text-base font-semibold leading-none min-[250px]:gap-2 min-[600px]:gap-3 min-[600px]:text-lg">
                {Icon && (
                  <Icon className="stroke-rose-2 size-5 min-[600px]:size-6" />
                )}
                {label}
              </Button>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
