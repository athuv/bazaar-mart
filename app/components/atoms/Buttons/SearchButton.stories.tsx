import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import SearchButton from "./SearchButton";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-4">
    <Story />
  </div>
);

const meta = {
  title: "atoms/Buttons/Search Button",
  component: SearchButton,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "ghost",
        "link",
        "outline",
        "secondary",
      ],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: {
        type: "inline-radio",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};
export const Link: Story = {
  args: {
    variant: "link",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
