import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AppContext from "../store/app-context";

const MainNavigation = () => {
  const appCxt = useContext(AppContext);

  const logoutHandler = () => {
    appCxt.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!appCxt.isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {appCxt.isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {appCxt.isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
