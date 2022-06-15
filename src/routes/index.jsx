import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useEffect, useState } from "react";

function Routes() {
  const [authenticated, setAuthenticate] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Khub:token"));

    if (token) {
      return setAuthenticate(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route path="/home" authenticated={authenticated}>
        <Home></Home>
      </Route>
      <Route exact path="/register" authenticated={authenticated}>
        <Register></Register>
      </Route>
      <Route>
        <Login exact path="/login" authenticated={authenticated} setAuthenticate={setAuthenticate}></Login>
      </Route>
    </Switch>
  );
}

export default Routes;
