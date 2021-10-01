import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HAND_OVER_THINGS, HOME, LOG_IN, LOG_OUT, REGISTRATION} from "./constants/Route";
import Home from "./components/homePage/Home"
import Things from "./components/HandOverThingsPage/Things";
import Login from "./components/loginPage/Login";
import Logout from "./components/logoutPage/Logout";
import Registration from "./components/registrationPage/Registration";
import {useState} from "react";

function App() {
  const [userEmail, setUserEmail] = useState(false);

  const userLogin = (email) => {
    setUserEmail(email)
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME} >
            <Home email={userEmail}/>
          </Route>
          <Route exact path={HAND_OVER_THINGS} >
            <Things email={userEmail}/>
          </Route>
            <Route exact path={LOG_IN}>
              <Login login={userLogin} />
            </Route>
          <Route exact path={LOG_OUT} >
            <Logout logout={userLogin}/>
          </Route>
          <Route exact path={REGISTRATION} >
            <Registration login={userLogin}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
