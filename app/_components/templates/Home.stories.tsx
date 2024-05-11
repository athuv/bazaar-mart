import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import HomeTemplate from "./HomeTemplate";

const withTailwindClasses = (Story: StoryFn) => (
  <div className="w-screen">
    <Story />
  </div>
);

const meta = {
  title: "templates/Home",
  component: HomeTemplate,
  decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};
