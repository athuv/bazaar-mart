import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

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

const locationData = JSON.parse(JSON.stringify(mswMockData));

export const FeaturedCarouselSectionComp: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("api/v1/deliveryLocation", () => {
          return HttpResponse.json(locationData);
        }),
      ],
    },
  },
};
