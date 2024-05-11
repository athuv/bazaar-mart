import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import mswMockData from "@/lib/data/mswMockData.json";
import DesktopSearchBar from "./DesktopSearchBar";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen bg-primary p-2">
    <Story />
  </div>
);

const meta = {
  title: "molecules/Desktop/Desktop Searchbar",
  component: DesktopSearchBar,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DesktopSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const locationData = JSON.parse(JSON.stringify(mswMockData));

export const DesktopSearchBarComp: Story = {};
