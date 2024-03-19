import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";

import mockLocationData from "@/lib/data/mswLocationByIp.json";
import DeliverySelectionSection from "./DeliverySelectionSection";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "organisms/Delivered To Button Section",
  component: DeliverySelectionSection,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DeliverySelectionSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliverySelectionSectionComp: Story = {
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

export const LocationLoading = {
  parameters: {
    msw: {
      handlers: [
        rest.get("api/v1/deliveryLocation", (req, res, ctx) => {
          return res(ctx.delay(10000), ctx.json(mockLocationData));
        }),
      ],
    },
  },
};
