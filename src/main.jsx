import React from "react";
import ReactDOM from "react-dom/client";
//browser router
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
