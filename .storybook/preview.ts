import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["atoms", "molecules", "organisms", "templates"],
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export default preview;
