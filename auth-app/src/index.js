import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/store/app-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>,
  document.getElementById("root")
);
