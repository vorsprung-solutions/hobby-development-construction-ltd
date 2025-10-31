import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import Providers from "./providers";
import "animate.css/animate.min.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <HelmetProvider>
        <QueryClientProvider client={ queryClient }>
          <App />
        </QueryClientProvider>
      </HelmetProvider>
    </Providers>
  </React.StrictMode>
);
