import type { Meta, StoryObj } from "@storybook/react";

import BackToTopSection from "./BackToTopSection";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "organisms/Back To Top Section",
  component: BackToTopSection,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BackToTopSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackToTop: Story = {};
