import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import "./index.css";
const renderRoot = createRoot(document.getElementById("root"));
renderRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
