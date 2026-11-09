import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/600.css";
import "./styles.css";

// No <React.StrictMode> here on purpose: in development it runs effects twice,
// which would make the lifecycle and useEffect demos show confusing double logs.
createRoot(document.getElementById("root")).render(<App />);
