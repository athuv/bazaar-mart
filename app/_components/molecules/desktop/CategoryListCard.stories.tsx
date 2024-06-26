import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import CategoryListCard from "./CategoryListCard";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Desktop/Category List Card",
  component: CategoryListCard,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoryListCardComp: Story = {};
