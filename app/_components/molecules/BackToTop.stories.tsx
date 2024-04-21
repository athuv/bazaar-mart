import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import BackToTop from "./BackToTop";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-4">
//     <Story />
//   </div>
// );

const meta = {
  title: "molecules/Back To Top Button",
  component: BackToTop,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
