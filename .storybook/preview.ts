import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

import "../app/globals.css";

initialize();

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
  decorators: [mswDecorator],
};

export default preview;
