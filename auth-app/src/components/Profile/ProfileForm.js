import classes from "./ProfileForm.module.css";
import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import AppContext from "../store/app-context";

const ProfileForm = () => {
  const appCxt = useContext(AppContext);
  const history = useHistory();
  const newPasswordRef = useRef();
  let passErr = "";

  const resetPassword = async () => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAyiztGYac7IMAWvQhXrnNorIWTnRiSu_M",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: appCxt.token,
          password: newPasswordRef.current.value,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = response.json();

    if (!response.ok) {
      passErr = data.error.message;
    } else {
      appCxt.logout();
      passErr = "";
      history.replace("/auth");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    resetPassword();
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
        <p>{passErr}</p>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
