import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./i18next";

export default function Index() {
  return (
    // <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    // </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
