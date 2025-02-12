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
      <GridBg className="z-0 stroke-light-4 dark:stroke-dark-4 fixed" />
      <Header className="z-50" />
      <main className="flex flex-col justify-center items-center select-none">
        <Home />
        <About />
        <Tools />
      </main>
      <footer className='select-none'>
        <Contacts />
        <Copyright />
      </footer>
    </>
  );
}
