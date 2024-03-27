import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import BackToTopButton from "./BackToTopButton";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-4">
//     <Story />
//   </div>
// );

const meta = {
  title: "atoms/Buttons/Back To Top Button",
  component: BackToTopButton,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BackToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
