import type { Meta, StoryObj } from "@storybook/react";

import CategoryHorizSection from "./CategoryHorizSection";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "organisms/Category Horizontal Section",
  component: CategoryHorizSection,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryHorizSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoryHorizontalSection: Story = {};
