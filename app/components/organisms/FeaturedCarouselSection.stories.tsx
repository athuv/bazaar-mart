import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";

import mswMockData from "@/lib/data/mswMockData.json";
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

export const FeaturedCarouselSectionComp: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("api/v1/carouselContent", (req, res, ctx) =>
          res(ctx.json(mswMockData.slider)),
        ),
      ],
    },
  },
};
