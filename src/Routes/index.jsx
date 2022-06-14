import { Switch, Route } from "react-router-dom";
import Home  from '../Pages/Home'
import Login  from '../Pages/Login'
import Register  from '../Pages/Register'

function Routes() {
  return (
    <Switch>
    <Route path="/home/:user">
      <Home></Home>
    </Route>
    <Route exact path="/register">
      <Register></Register>
    </Route>
    <Route>
      <Login exact path="/login"></Login>
    </Route>
  </Switch>
  )
}

export default Routes;