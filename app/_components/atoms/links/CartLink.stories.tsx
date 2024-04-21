import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import CartLink from "./CartLink";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-4">
    <Story />
  </div>
);

const meta = {
  title: "atoms/Links/Cart Link",
  component: CartLink,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CartLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CartLinkWithIcon: Story = {};
