import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import MobileLogo from "./MobileLogo";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-4">
    <Story />
  </div>
);

const meta = {
  title: "atoms/Logo/Mobile Logo",
  component: MobileLogo,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoMobile: Story = {};
