import { Switch, Route } from "react-router-dom";
import Home  from './Pages/Home'
import Login  from './Pages/Login'
import Register  from './Pages/Register'

function App() {
  return (
    <div >
      <Switch>
        <Route path="/home/:user">
          <Home></Home>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route>
          <Login path="/login"></Login>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
