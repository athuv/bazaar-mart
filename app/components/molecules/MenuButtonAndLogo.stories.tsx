import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import MenuButtonAndLogo from "./MenuButtonAndLogo";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Menu Button & Logo",
  component: MenuButtonAndLogo,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MenuButtonAndLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuButtonAndLogoComp: Story = {};
