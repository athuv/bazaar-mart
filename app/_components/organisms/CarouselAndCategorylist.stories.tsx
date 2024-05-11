import type { Meta, StoryObj } from "@storybook/react";
import CarouselAndCategorylist from "./CarouselAndCategorylist";

const meta = {
  title: "organisms/Featured Carousel Section",
  component: CarouselAndCategorylist,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CarouselAndCategorylist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselAndCategorylistComp: Story = {};
