import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

import mswMockData from "@/lib/data/mswMockData.json";
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

const locationData = JSON.parse(JSON.stringify(mswMockData));

export const DesktopHeader: Story = {
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
