import { Switch, Route, Redirect } from "react-router-dom";
import { useContext, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AppContext from "./components/store/app-context";
let sessionTimer;
function App() {
  const appCxt = useContext(AppContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!appCxt.token && token && token.length > 0) {
      const validTill = localStorage.getItem("validTill");

      const timeLeft = new Date(validTill) - new Date();

      if (timeLeft > 3000) {
        appCxt.login(token);
        sessionTimer = setTimeout(appCxt.logout, timeLeft);
      }
    }
  }, [appCxt]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        {appCxt.isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
