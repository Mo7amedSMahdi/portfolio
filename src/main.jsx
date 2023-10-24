import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        {/* The cursor elements */}
        <div className="cursor cursor--small"></div>
        <canvas className="cursor cursor--canvas" resize="true"></canvas>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
