import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import SearchInputAndButton from "./SearchInputAndButton";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Search Input & Button",
  component: SearchInputAndButton,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInputAndButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchInputAndButtonComp: Story = {};
