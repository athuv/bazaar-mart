import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import Footer from "./Footer";

const meta = {
  title: "organisms/Footer",
  component: Footer,
  // decorators: [withTailwindClasses],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterComponent: Story = {};
