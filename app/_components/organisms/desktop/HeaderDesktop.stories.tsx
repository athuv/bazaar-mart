import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

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

export const DesktopHeader: Story = {};
