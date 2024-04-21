import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import ProfileLink from "./ProfileLink";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-4">
    <Story />
  </div>
);

const meta = {
  title: "atoms/Links/Profile Link",
  component: ProfileLink,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileLinkWithIcon: Story = {};
