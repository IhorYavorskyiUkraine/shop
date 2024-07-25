import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.js";

import { store } from "./store/index.js";

const rootElement = document.getElementById("root");

if (rootElement) {
   ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
         <Provider store={store}>
            <App />
         </Provider>
      </React.StrictMode>,
   );
}
