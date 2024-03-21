import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import LoginSignupSection from "./LoginSignupSection";

const meta = {
  title: "organisms/Login & Signup Section",
  component: LoginSignupSection,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginSignupSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginSingup: Story = {};
