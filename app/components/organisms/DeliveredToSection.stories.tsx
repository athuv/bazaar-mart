import type { Meta, StoryObj } from "@storybook/react";

import DeliveredToSection from "./DeliveredToSection";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "organisms/Delivered To Button Section",
  component: DeliveredToSection,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DeliveredToSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliveredToSectionComp: Story = {};
