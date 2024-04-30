import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import ProductListSection from "./ProductListSection";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "organisms/Product List Section",
  component: ProductListSection,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductListSectionComp: Story = {};
