import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import CategoryHorizList from "./CategoryHorizList";
import categoryList from "@/lib/data/categories.json";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Category Horizontal List",
  component: CategoryHorizList,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryHorizList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoryHorizontalList: Story = {
  args: {
    categoryList,
  },
};
