import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import FeaturedCarouselSection from "./FeaturedCarouselSection";

const meta = {
  title: "organisms/Featured Carousel Section",
  component: FeaturedCarouselSection,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedCarouselSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeaturedCarouselSectionComp: Story = {};
