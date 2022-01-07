import { Route } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Hi New User</p>
      </Route>
    </section>
  );
};

export default Welcome;
