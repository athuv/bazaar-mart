import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import HeaderRightContent from "./HeaderRightContent";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Desktop/Header right contents",
  component: HeaderRightContent,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderRightContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderRightContentComp: Story = {};
