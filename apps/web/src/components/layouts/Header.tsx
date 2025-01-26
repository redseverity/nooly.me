import { ButtonLink } from "../ui/Button";
import { Card } from "../ui/Card";
import { Logo } from "../ui/Logo";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={`
        flex justify-center
        border-b-[1px] border-dark-800 bg-dark-200
        h-[60px] w-screen fixed top-0
        ${className}`}
    >
      <div className="flex justify-between items-center h-full w-[75%]">
        <Logo />

        <Card
          className="h-[2.8rem] w-min p-[0px]
            justify-center items-center
            rounded-full flex overflow-hidden
            [&_*]:h-[2.8rem] [&_*]:w-[120px] [&_*]:bg-none 
            ">
          {["Home", "About", "Tools", "Contacts"].map((e, i) => {
            return (
              <ButtonLink
                text={`${e}`}
                link={`#${e}`}
                key={i}
                className="hover:bg-gradient-to-b
                hover:from-rose-200 hover:to-rose-300"
              />
            );
          })}
        </Card>

        <ButtonLink
          text="My account"
          link="/"
          className="!bg-none !font-bold !text-rose-200"
        />
        <ButtonLink
          text="Get Started"
          arrow
          link="/"
          className="!font-bold h-[2.6rem]"
        />
      </div>
    </header>
  );
};

export { Header };
