import { Card, Section } from "@/components/ui";

export const About = () => {
  const label1 = [
    ["+1M Users", "of users globally."],
    ["No Hassle", "results without complexity."],
    ["Up to 25x speed", "seen by Nooly users*"],
    ["Trusted by Millions", "reliable online tools."],
  ];

  const label2 = [
    [
      "5 years experience",
      "providing the best tools that save time, increase productivity and make online tasks easier for everyone.",
    ],
    [
      "For all users",
      "The number #1 platform for video music, and image with easy and fast tools to help you transform your ideas.",
    ],
  ];

  return (
    <Section
      id="About"
      className="min-[600px]:pt-14 min-[600px]:pb-20 pt-10 pb-16 min-[600px]:gap-6 gap-4 flex justify-center items-center scroll-mt-16"
    >
      <h2 className="font-semibold min-[800px]:text-[40pt] min-[600px]:text-[7vw] text-[7vw] text-nowrap dark:text-light-2 text-dark-2 pb-6">
        Making a Difference<span className="text-rose-2">+</span>
      </h2>

      <div>
        <div className="flex flex-col justify-center items-center gap-6 min-[750px]:w-[42rem] min-[330px]:w-[88vw] w-[86vw]">
          <div className="w-full grid min-[750px]:grid-cols-2 min-[750px]:grid-rows-2 grid-cols-1 grid-rows-4 gap-6">
            {label1.map((e, i) => {
              return (
                <Card
                  className="min-[500px]:py-6 py-4 px-6 text-nowrap dark:bg-dark-3 bg-light-3"
                  key={i}
                >
                  <h3 className="gradient-text-rose min-[500px]:text-[20pt] text-[5vw] font-semibold">
                    {e[0]}
                  </h3>
                  <p className="min-[600px]:text-[13pt] text-[3.5vw] font-semibold dark:text-light-2 text-dark-2">
                    {e[1]}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="w-full gap-6 flex flex-col">
            {label2.map((e, i) => {
              return (
                <Card
                  className="min-[500px]:py-6 py-4 px-6 dark:bg-dark-3 bg-light-3"
                  key={i}
                >
                  <h3 className="text-nowrap gradient-text-rose min-[750px]:text-[22pt] min-[500px]:text-[20pt] text-[5vw] font-semibold">
                    {e[0]}
                  </h3>
                  <p className="min-[700px]:text-[13pt] min-[600px]:text-[10pt] text-[3vw] font-semibold dark:text-light-2 text-dark-2">
                    {e[1]}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
