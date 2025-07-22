import type { StallExtension } from "@stallpos/extension-types";

const app: StallExtension = {
  pages: [{
      index: true,
      id: "all-rates",
      title: "All Rates",
      description: "A list of all your rates",
      contexts: {
        lookup: true,
        standalone: false,
      },
      ui: {
        type: "list",
        data_origin: "remote",
        filters:[],
        source: "https://raw.githubusercontent.com/Sands-45/stall-currency-converter/refs/heads/main/src/mock.json",
        keys: {
          id: "id",
          image: "",
          right: { key: "rate", format: "price" },
          left: { key: "currency", format: "none" },
        },
      },
      actions: [{
    native: true,
    name: "",
    label: "Get other rates",
    static_args: {},
    close_on_complete: false,
  },],
    },],
};

export default app;