import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import categories from "@/lib/data/categories.json";
import PopularCategories from "./PopularCategories";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "molecules/Side Drawer - Popular Categories List",
  component: PopularCategories,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PopularCategories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideDrawerPopularCategoryList: Story = {
  args: {
    categoryList: categories,
  },
};
