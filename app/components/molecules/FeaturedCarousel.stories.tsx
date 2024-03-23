import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import FeaturedCarousel from "./FeaturedCarousel";
import featuredImages from "@/lib/data/featuredImages.json";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "molecules/Featured Carousel",
  component: FeaturedCarousel,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeaturedCarouselComp: Story = {
  args: {
    slider: featuredImages.slider,
    scroll: featuredImages.scroll,
  },
};
