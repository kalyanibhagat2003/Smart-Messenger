import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./style/App.css";
import "./style/sidebar.css";
import "./style/chat.css";
import "./style/themes.css";
import "./style/auth.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);