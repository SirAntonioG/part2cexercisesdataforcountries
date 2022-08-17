import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import App from "./App";

axios.get("https://restcountries.com/v3.1/all").then((res) => {
  const all = res.data;
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App all={all} />
  );
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
