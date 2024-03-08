import { QueryClient } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "@vkontakte/vkui/dist/vkui.css";

import { Providers } from "./providers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers queryClient={queryClient} />
  </React.StrictMode>,
);
