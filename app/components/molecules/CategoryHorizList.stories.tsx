import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import CategoryHorizList from "./CategoryHorizList";

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
    categoryList: [
      { id: "001", category: "Electronics", link: "./" },
      { id: "002", category: "Food", link: "./" },
      { id: "003", category: "Book", link: "./" },
      { id: "004", category: "Clothing", link: "./" },
      { id: "005", category: "Personal Care", link: "./" },
      { id: "006", category: "Furniture", link: "./" },
    ],
  },
};
