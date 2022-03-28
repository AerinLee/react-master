import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App_redux_cart";
import store from "./store/index_redux_cart";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
