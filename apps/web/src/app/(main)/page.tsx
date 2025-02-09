import { GridBg, Header, Home, About } from "@/components/layouts";
import { NewUsers } from "@/components/ui";

export default function App() {
  return (
    <>
      <GridBg className="z-0 stroke-light-4 dark:stroke-dark-4 fixed" />

      <Header className="z-50" />

      <main className="flex flex-col justify-center items-center">
        <NewUsers />
        <Home />
        <About />
      </main>
    </>
  );
}
