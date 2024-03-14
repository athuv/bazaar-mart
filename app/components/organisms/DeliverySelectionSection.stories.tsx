import type { Meta, StoryObj } from "@storybook/react";

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

export const DeliverySelectionSectionComp: Story = {};
