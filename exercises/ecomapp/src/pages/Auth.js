import React from "react";
import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <section className={classes.authModal}>
      <h1>Login or Signup</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Email Id : </label>
          <input type="email" id="email"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password : </label>
          <input type="password" id="password"></input>
        </div>
        <button>Login or Create Account</button>
        <button>Create new Account or Login with existing Account</button>
      </form>
    </section>
  );
};

export default Auth;
