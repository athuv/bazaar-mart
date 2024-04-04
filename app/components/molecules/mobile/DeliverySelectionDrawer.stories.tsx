import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { rest } from "msw";

import mockLocationData from "@/lib/data/mswLocationByIp.json";
import DeliverySelectionDrawer from "./DeliverySelectionDrawer";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-secondary">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Delivery Selection Drawer & Trigger",
  component: DeliverySelectionDrawer,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DeliverySelectionDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliverySelectionDrawerComp: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("api/v1/deliveryLocation", (req, res, ctx) =>
          res(ctx.json(mockLocationData)),
        ),
      ],
    },
  },
};
