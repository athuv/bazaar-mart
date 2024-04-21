import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import CategoryHorizLink from "./CategoryHorizLink";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-4">
    <Story />
  </div>
);

const meta = {
  title: "atoms/Links/Category Horizontal Link",
  component: CategoryHorizLink,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryHorizLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoryHorizontalLink: Story = {
  args: {
    children: "CATEGORY LINK",
    link: "./",
  },
};
