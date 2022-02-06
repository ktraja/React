import React, { useState, useRef, useEffect, useCallback } from "react";
import classes from "./Auth.module.css";
import loginFunc from "../api/loginFunc";
import useHttp from "../api/useHttp";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { cart_api } from "../redux/actions";
import { CART } from "../redux/actionTypes";
import getCart from "../api/getCart";

const Auth = () => {
  const [toggleSignup, setToggleSignup] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { sendRequest } = useHttp(loginFunc);
  const history = useHistory();
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  let user;

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

  const getUser = async () => {
    let userName = "No User Found";
    const userResp = await fetch(
      "https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/ecomcart/users.json",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const userList = await userResp.json();
    for (const key in userList) {
      if (userList[key].email === emailInputRef.current.value) {
        userName = userList[key].user;
      }
    }
    return userName;
  };

  const toggleHandler = () => {
    setToggleSignup((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!toggleSignup) {
      getUser().then((value) => {
        user = value;
        const loginObj = {
          signupFlag: toggleSignup,
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          user: user ? user : nameInputRef.current.value,
          reqType: "LOGIN",
        };
        sendRequest(loginObj);
      });
    } else {
      const loginObj = {
        signupFlag: toggleSignup,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        user: nameInputRef.current.value,
        reqType: "SIGNUP",
      };
      sendRequest(loginObj);
    }

    // const validTill = new Date(new Date().getTime() + data.expiresIn * 1000);
  };

  useEffect(() => {
    switch (authReducer.status) {
      case "LOGGEDIN": {
        getUserCart(authReducer.user);
        history.replace("/shop");
        break;
      }
      case "LOGIN_ERROR": {
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        break;
      }
      default:
        history.replace("/login");
    }
  }, [history, authReducer.status, authReducer.user, getUserCart]);

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
        <p>{authReducer.status === "LOGIN_ERROR" ? authReducer.data : ""}</p>
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
