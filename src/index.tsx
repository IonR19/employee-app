import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import "./localization/i18n";

import "./style.scss";
import { store } from "./store/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
