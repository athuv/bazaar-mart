import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import SlideDrawerSettings from "./SlideDrawerSettings";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "molecules/Slide Drawer - Settings",
  component: SlideDrawerSettings,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SlideDrawerSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SlideDrawerSettingsComp: Story = {};
