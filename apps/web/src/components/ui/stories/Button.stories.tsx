import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "@/components/ui";

const Component = ({ isOpen: defaultOpen }: { isOpen: boolean }) => {
  let isOpen = defaultOpen;
  return (
    <Menu.Root>
      {isOpen ? (
        <Menu.Close onClick={() => (isOpen = false)} />
      ) : (
        <Menu.Open onClick={() => (isOpen = true)} />
      )}
    </Menu.Root>
  );
};

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Components/ui/Menu",
  tags: ["Menu"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "change button icon",
    },
  },
};

export default meta;

// Definição de uma story
export const Default: StoryObj<typeof Component> = {
  args: {
    isOpen: false,
  },
};
