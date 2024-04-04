import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import categories from "@/lib/data/categories.json";
import SlideDrawerWithToggle from "./SlideDrawerWithToggle";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "molecules/Slide Drawer With Toggle Button",
  component: SlideDrawerWithToggle,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SlideDrawerWithToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SlideDrawerWithToggleButton: Story = {
  args: {
    categoryList: categories,
  },
};
