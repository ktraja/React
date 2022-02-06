import "./App.css";
import Shop from "./pages/Shop";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCart from "./pages/ShoppingCart";
import { login_api, cart_api } from "./redux/actions";
import { LOGIN, CART } from "./redux/actionTypes";
import { useEffect, useCallback } from "react";
import getCart from "./api/getCart";

let sessionTimer, token, validTill, timeLeft, user;

function App() {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const { status, data } = authReducer;

  const getUserCart = useCallback(
    (user) => {
      getCart(user).then((value) => {
        const userCart = value;
        dispatch(
          cart_api({
            type: CART,
            cartItems: userCart.cartItems,
            totQty: userCart.totQty,
            totVal: userCart.totVal,
          })
        );
      });
    },
    [dispatch]
  );

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("validTill");
    dispatch(
      login_api({
        type: LOGIN,
        user: null,
        data: null,
        status: "LOGGEDOUT",
      })
    );
    clearTimeout(sessionTimer);
  };

  token = localStorage.getItem("token");
  if (token && token.length > 0) {
    validTill = localStorage.getItem("validTill");
    timeLeft = new Date(validTill) - new Date();
    user = localStorage.getItem("user");
  }

  useEffect(() => {
    if (status === "LOGGEDIN") {
      sessionTimer = setTimeout(logoutHandler, timeLeft);
    } else {
      if (!data && token && token.length > 0) {
        if (timeLeft > 3000) {
          dispatch(
            login_api({
              type: LOGIN,
              user: localStorage.getItem("user"),
              data: { token: token },
              status: "LOGGEDIN",
            })
          );
          sessionTimer = setTimeout(logoutHandler, timeLeft);
        }
        getUserCart(user);
      }
    }
  });

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
