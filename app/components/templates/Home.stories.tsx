import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { rest } from "msw";

import mockLocationData from "@/lib/data/mswLocationByIp.json";
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

export const Home: Story = {
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
