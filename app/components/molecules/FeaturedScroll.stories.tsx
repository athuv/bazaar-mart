import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import FeaturedScroll from "./FeaturedScroll";
import featuredImages from "@/lib/data/featuredImages.json";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="absolute top-20 w-screen">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Featured Scroll",
  component: FeaturedScroll,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeaturedScrollComp: Story = {
  args: {
    scroll: featuredImages.scroll,
  },
};
