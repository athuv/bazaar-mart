import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import LoginSignup from "./LoginSignup";

// const withTailwindClasses = (Story: StoryFn) => (
//   <div className="w-screen bg-primary p-2">
//     <Story />
//   </div>
// );

const meta = {
  title: "molecules/Login & Signup Container",
  component: LoginSignup,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginSingupComp: Story = {};
