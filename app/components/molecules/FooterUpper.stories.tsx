import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import FooterUpper from "./FooterUpper";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2 text-primary-foreground">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Footer Upper Component",
  component: FooterUpper,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FooterUpper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpperFooter: Story = {};
