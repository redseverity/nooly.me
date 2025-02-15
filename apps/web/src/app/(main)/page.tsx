import {
  GridBg,
  Header,
  Home,
  About,
  Tools,
  Contacts,
  Copyright,
} from "@/components/layouts";

export default function App() {
  return (
    <>
      <GridBg className="stroke-light-4 dark:stroke-dark-4 fixed z-0" />
      <Header className="z-50" />
      <main className="flex select-none flex-col items-center justify-center">
        <Home />
        <About />
        <Tools />
      </main>
      <footer className="select-none">
        <Contacts />
        <Copyright />
      </footer>
    </>
  );
}
