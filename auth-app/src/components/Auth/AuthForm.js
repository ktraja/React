import { useRef, useState, useContext, useEffect } from "react";
import AppContext from "../store/app-context";
import classes from "./AuthForm.module.css";
import { useHistory } from "react-router";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginError, setLoginError] = useState();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const appCxt = useContext(AppContext);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const loginFunc = async (loginUrl, apiKey) => {
      const response = await fetch(loginUrl + apiKey, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmailRef.current.value,
          password: enteredPasswordRef.current.value,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      if (!response.ok) {
        setLoginError(data.error.message);
        return loginError;
      } else {
        const validTill = new Date(
          new Date().getTime() + data.expiresIn * 1000
        );
        appCxt.login(data.idToken);
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("validTill", validTill);
        setTimeout(appCxt.logout, data.expiresIn * 1000);
        setLoginError();
      }
    };

    if (isLogin) {
      const loginUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
      const apiKey = "AIzaSyAyiztGYac7IMAWvQhXrnNorIWTnRiSu_M";
      loginFunc(loginUrl, apiKey);
    } else {
      const loginUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
      const apiKey = "AIzaSyAyiztGYac7IMAWvQhXrnNorIWTnRiSu_M";
      loginFunc(loginUrl, apiKey);
    }
  };

  useEffect(() => {
    if (appCxt.isLoggedIn) {
      history.replace("/");
    }
  }, [history, appCxt.isLoggedIn]);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={enteredEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={enteredPasswordRef}
          />
          <p>{loginError}</p>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
