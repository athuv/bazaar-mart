import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import HeaderMobile from "./HeaderMobile";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "organisms/Header Mobile",
  component: HeaderMobile,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderMobileComp: Story = {};
