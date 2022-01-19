import React, { useState, useRef, useEffect } from "react";
import classes from "./Auth.module.css";
import loginFunc from "../api/loginFunc";
import useHttp from "../api/useHttp";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Auth = () => {
  const [toggleSignup, setToggleSignup] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { sendRequest } = useHttp(loginFunc);
  const history = useHistory();
  const authReducer = useSelector((state) => state.authReducer);

  let loginUrl, apiKey;

  const toggleHandler = () => {
    setToggleSignup((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (toggleSignup) {
      loginUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
      apiKey = "AIzaSyAyiztGYac7IMAWvQhXrnNorIWTnRiSu_M";
    } else {
      loginUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
      apiKey = "AIzaSyAyiztGYac7IMAWvQhXrnNorIWTnRiSu_M";
    }

    sendRequest({
      loginFlag: true,
      user: "Raja",
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      loginUrl: loginUrl,
      apiKey: apiKey,
    });

    // const validTill = new Date(new Date().getTime() + data.expiresIn * 1000);
  };

  useEffect(() => {
    if (authReducer.status === "LOGGEDIN") {
      history.replace("/shop");
    }
  }, [history, authReducer.status]);

  return (
    <section className={classes.authModal} onSubmit={submitHandler}>
      <h1>{toggleSignup ? "Signup" : "Login"}</h1>
      <form>
        {toggleSignup && (
          <div className={classes.control}>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" required ref={nameInputRef}></input>
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Email Id : </label>
          <input type="email" id="email" required ref={emailInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          ></input>
        </div>
        <button className={classes.btn} type="submit">
          {toggleSignup ? "Create Account" : "Login"}
        </button>
        <button className={classes.btn} type="button" onClick={toggleHandler}>
          {toggleSignup ? "Login with existing Account" : "Create new Account"}
        </button>
      </form>
    </section>
  );
};

export default Auth;
