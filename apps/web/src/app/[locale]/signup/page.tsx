import { GridBg } from "@/components/layouts";
import { Button, Card, Icons } from "@/components/ui";
import clsx from "clsx";
import { Mail } from "lucide-react";

const providers = [
  { Icon: Icons.google, label: "Create with Google" },
  { Icon: Icons.twitter, label: "Create with X" },
  { Icon: Mail, label: "Create with Email" },
];

export default function signup() {
  return (
    <>
      <GridBg className="stroke-light-4 dark:stroke-dark-4 fixed z-0" />
      <div className="flex h-full items-center justify-center">
        <Card className="bg-light-2 dark:bg-dark-2 z-10 flex h-80 w-80 flex-col items-center justify-center gap-8">
          <h1 className="text-center text-xl">Create an account</h1>
          <div className="flex flex-col items-center justify-center gap-3">
            {providers.map(({ Icon, label }, index) => (
              <Button
                key={index}
                className="btn-outline border-light-8 dark:border-dark-8 dark:bg-dark-3 bg-light-3 flex h-12 !w-72 flex-row justify-center rounded-xl border"
              >
                <span className="text-dark-4 dark:text-light-4 flex w-3/4 flex-row items-center">
                  <Icon
                    className={clsx(
                      "ml-4 mr-5 w-5",
                      index == 2 ? "stroke-dark-1 dark:stroke-light-8" : null,
                    )}
                  />
                  {label}
                </span>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
