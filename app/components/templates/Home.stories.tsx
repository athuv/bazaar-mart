import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

import mswMockData from "@/lib/data/mswMockData.json";
import HomeTemplate from "./HomeTemplate";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen">
    <Story />
  </div>
);

const meta = {
  title: "templates/Home",
  component: HomeTemplate,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const locationData = JSON.parse(JSON.stringify(mswMockData));

export const Home: Story = {
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
