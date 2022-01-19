import "./App.css";
import Shop from "./pages/Shop";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useSelector, useDispatch } from "react-redux";
import { login_api } from "./redux/actions";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("validTill");
    dispatch(
      login_api({
        type: "LOGOUT",
        user: null,
        data: null,
        status: "LOGGEDOUT",
      })
    );
  };

  return (
    <div className="App">
      <div className="App-header">
        <span>Welcome to React eCommmerce Shopping Mart</span>
        <nav>
          <ul className="App-List">
            {authReducer.status !== "LOGGEDIN" && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {authReducer.status === "LOGGEDIN" && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {authReducer.status === "LOGGEDIN" && (
              <li>
                <Link to="/profile" onClick={logoutHandler}>
                  Logout
                </Link>
                {/* <button onClick={logoutHandler}>Logout</button> */}
              </li>
            )}
          </ul>
        </nav>
        {authReducer.status === "LOGGEDIN" && (
          <Link to="/cart">
            <span>{authReducer.user}</span>
            <span type="button" className="fas fa-shopping-cart cart"></span>
          </Link>
        )}
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
          {authReducer.status === "LOGGEDIN" && (
            <Route path="/shop">
              <Shop />
            </Route>
          )}
          {authReducer.status === "LOGGEDIN" && (
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          )}
        </Switch>
      </div>
    </div>
  );
}

export default App;
