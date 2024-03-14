import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import DeliveredToButton from "./DeliveredToButton";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-secondary">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Delivered To Button",
  component: DeliveredToButton,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DeliveredToButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliveredToButtonComp: Story = {};
