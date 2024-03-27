import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import FooterLower from "./FooterLower";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2 text-primary-foreground">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Footer Lower Component",
  component: FooterLower,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FooterLower>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowerFooter: Story = {};
