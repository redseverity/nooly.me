import type { Meta, StoryObj } from "@storybook/react";
import { MenuToggle } from "@/components/ui";

const Component = ({ isOpen: defaultOpen }: { isOpen: boolean }) => {
  let isOpen = defaultOpen;
  return (
    <MenuToggle.Root>
      {isOpen ? (
        <MenuToggle.Close onClick={() => (isOpen = false)} />
      ) : (
        <MenuToggle.Open onClick={() => (isOpen = true)} />
      )}
    </MenuToggle.Root>
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
