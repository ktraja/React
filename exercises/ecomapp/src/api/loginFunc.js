const loginFunc = async (loginObj) => {
  const response = await fetch(loginObj.loginUrl + loginObj.apiKey, {
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
    return data.error.message;
  } else {
    const validTill = new Date(new Date().getTime() + data.expiresIn * 1000);
    localStorage.setItem("user", loginObj.user);
    localStorage.setItem("token", data.idToken);
    localStorage.setItem("validTill", validTill);
    // setTimeout(  logoutFunction, data.expiresIn * 1000);
    return data;
  }
};

export default loginFunc;
