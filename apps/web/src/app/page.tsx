import { GridBg } from "@/components/layouts/GridBg";
import { Header } from "@/components/layouts/Header";

export default function App() {
  return (
    <>
      <GridBg dark={true} />
      <div className="relative z-[1] h-full w-full">
        <Header />
      </div>
    </>
  );
}
