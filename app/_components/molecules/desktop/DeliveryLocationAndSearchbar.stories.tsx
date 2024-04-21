import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

import mswMockData from "@/lib/data/mswMockData.json";
import DeliveryLocationAndSearchBar from "./DeliveryLocationAndSearchBar";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Desktop/Delivery Location & Searchbar",
  component: DeliveryLocationAndSearchBar,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DeliveryLocationAndSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const locationData = JSON.parse(JSON.stringify(mswMockData));

export const DeliveryLocationAndSearchBarComp: Story = {
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
