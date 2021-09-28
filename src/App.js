import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HAND_OVER_THINGS, HOME, LOG_IN, LOG_OUT, REGISTRATION} from "./constants/Route";
import Home from "./components/homePage/Home"
import Things from "./components/HandOverThingsPage/Things";
import Login from "./components/loginPage/Login";
import Logout from "./components/logoutPage/Logout";
import Registration from "./components/registrationPage/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME} component={Home} />
            <Route exact path={HAND_OVER_THINGS} component={Things}/>
            <Route exact path={LOG_IN} component={Login}/>
            <Route exact path={LOG_OUT} component={Logout}/>
            <Route exact path={REGISTRATION} component={Registration}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
