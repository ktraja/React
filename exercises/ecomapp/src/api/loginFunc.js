const loginFunc = async (loginObj) => {
  let loginUrl, apiKey;
  if (loginObj.signupFlag) {
    loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    apiKey = "AIzaSyAyiztGYac7IMAWvQhXrnNorIWTnRiSu_M";
  } else {
    loginUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    apiKey = "AIzaSyAyiztGYac7IMAWvQhXrnNorIWTnRiSu_M";
  }

  const response = await fetch(loginUrl + apiKey, {
    method: "POST",
    body: JSON.stringify({
      email: loginObj.email,
      password: loginObj.password,
      returnSecureToken: true,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || "Login Error");
  } else {
    if (loginObj.signupFlag) {
      const resp = await fetch(
        "https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/ecomcart/users.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: loginObj.user,
            email: loginObj.email,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      // const userData = await resp.json();
      if (!resp.ok) {
        throw new Error(data.error.message || "Error User Table");
      }
    }

    const validTill = new Date(new Date().getTime() + data.expiresIn * 1000);
    localStorage.setItem("user", loginObj.user);
    localStorage.setItem("token", data.idToken);
    localStorage.setItem("validTill", validTill);
    return data;
  }
};

export default loginFunc;
