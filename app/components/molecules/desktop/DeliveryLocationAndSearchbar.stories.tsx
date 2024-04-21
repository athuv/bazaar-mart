import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { rest } from "msw";

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

export const DeliveryLocationAndSearchBarComp: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("api/v1/deliveryLocation", (req, res, ctx) =>
          res(ctx.json(mswMockData.data)),
        ),
      ],
    },
  },
};
