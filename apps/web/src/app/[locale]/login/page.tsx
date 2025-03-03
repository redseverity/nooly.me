import { GridBg, AuthPanel, Header } from "@/components/layouts";

export default function login() {
  return (
    <>
      <GridBg className="stroke-light-4 dark:stroke-dark-4 fixed z-0" />
      <Header className="z-50" />
      <AuthPanel />
    </>
  );
}
