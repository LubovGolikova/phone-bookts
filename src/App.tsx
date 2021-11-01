import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ROUTES} from "./constants/routes";
import RouterLink from './features/routes/routerLink';
import {Login} from './features/auth/component/login';
import {Register} from './features/auth/component/register';

function App() {
  return (
      <div>
          <Router>
              <div>
                  <RouterLink/>
                  <Switch>
                      {/*<Route exact path={ROUTES.static.main} component={PhonesList}/>*/}
                      {/*<Route exact path={ROUTES.static.add} component={AddPhone}/>*/}
                      <Route exact path={ROUTES.static.login} component={Login}/>
                      <Route exact path={ROUTES.static.register} component={Register}/>
                      {/*<Route exact path={ROUTES.dynamic.details()} component={Phone}/>*/}
                      {/*<Route exact path={ROUTES.dynamic.edit()} component={EditPhone}/>*/}
                      {/*<Route exact path={ROUTES.static.edit} component={EditPhone}/>*/}
                      {/*<Redirect to={ROUTES.static.notFound} component={NotFound} />*/}
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
