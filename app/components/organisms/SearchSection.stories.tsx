import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import SearchSection from "./SearchSection";

const meta = {
  title: "organisms/Search Section",
  component: SearchSection,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchSectionComp: Story = {};
