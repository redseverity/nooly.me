import { GridBg, Header, HomeSection } from "@/components/layouts";
import { NewUsers, Section } from "@/components/ui";

export default function App() {
  return (
    <>
      <GridBg className="z-0 stroke-light-4 dark:stroke-dark-4 fixed" />

      <Header className="z-50" />

      <main className="flex flex-col justify-center items-center">
        <NewUsers />

        <HomeSection />

        <Section
          id="#About"
          className="w-full h-[20rem] flex justify-center items-center"
        ></Section>
      </main>
    </>
  );
}
