import React from "react";
import { createRoot } from "react-dom/client";
import "@/app/index.css";
import AppProviders from "./app/providers";

createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <AppProviders></AppProviders>,
   </React.StrictMode>,
);
