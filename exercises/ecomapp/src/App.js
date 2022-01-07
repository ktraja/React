import "./App.css";
import Shop from "./pages/Shop";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span>Welcome to React eCommmerce Shopping Mart</span>
        <span type="button" className="fas fa-shopping-cart cart"></span>
      </div>

      <div className="App-body">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
