import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";

import mockLocationData from "@/lib/data/mswLocationByIp.json";
import HeaderDektop from "./HeaderDesktop";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "organisms/desktop/Header Desktop",
  component: HeaderDektop,
  // decorators: [withTailwindClasses],
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderDektop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopHeader: Story = {
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
