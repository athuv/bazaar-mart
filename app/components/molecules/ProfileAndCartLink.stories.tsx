import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import ProfileAndCartLink from "./ProfileAndCartLink";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Profile & Cart Links",
  component: ProfileAndCartLink,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileAndCartLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileAndCartLinkComp: Story = {};
