import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import productList from "@/lib/data/productList.json";
import ProductList from "./ProductList";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "molecules/Product List",
  component: ProductList,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductListComp: Story = { args: { productList } };
