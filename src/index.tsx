import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Order } from "./App/components/Order";
import { Orders } from "./App/components/Orders";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />}>
            <Route index element={<Orders />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
