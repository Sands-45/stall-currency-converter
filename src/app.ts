import { type StallExtension } from "@stallpos/extension-types";

const endpoint =
  "https://raw.githubusercontent.com/Sands-45/stall-currency-converter/refs/heads/main/src/mock.json";

const app: StallExtension = {
  pages: [
    {
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
        filters: [],
        sorting: {
          key: "currency",
          order: "asc",
        },
        source: endpoint,
        keys: {
          id: "currency",
          image: "",
          title: {
            value: "{{currency}}",
            format: "none",
            className: "uppercase",
          },
          right: {
            value: "{{currency}} {{rate}}",
            format: "number",
            className: "capitalize",
          },
        },
      },
      actions: [
        {
          native: true,
          name: "open_page",
          label: "View rate",
          static_args: {
            page_id: "rate_summary",
            page_title: "Rate Summary",
          },
          close_on_complete: false,
        },
      ],
    },
    {
      index: true,
      id: "rate_summary",
      title: "Rate Summary",
      description: "View rate summary",
      contexts: {
        lookup: true,
        standalone: false,
      },
      ui: {
        type: "custom",
        name: "rate_summary",
      },
      actions: [
        {
          native: true,
          name: "",
          label: "View rate",
          static_args: {
            page_id: "rate_summary",
            page_title: "Rate Summary",
          },
          close_on_complete: false,
        },
      ],
    },
  ],
};

export default app;
