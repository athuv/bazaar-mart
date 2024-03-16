import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import HamburgerMenuButton from "./HamburgerMenuButton";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-4">
    <Story />
  </div>
);

const meta = {
  title: "atoms/Buttons/Hamburger Menu",
  component: HamburgerMenuButton,
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
} satisfies Meta<typeof HamburgerMenuButton>;

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

// export const Medium: Story = {
//   args: {
//     size: "text-md",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "text-lg",
//   },
// };

// export const XL: Story = {
//   args: {
//     size: "text-xl",
//   },
// };

// export const XXL: Story = {
//   args: {
//     size: "text-2xl",
//   },
// };
