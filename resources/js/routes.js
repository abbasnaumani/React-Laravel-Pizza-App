import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Auth from "./pages/Auth/Auth";
import Logout from "./pages/Auth/Logout/Logout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import Menu from "./pages/Menu/Menu";

const routes = () => (
    <Switch>
        <Route path="/login" component={Auth}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/dashboard" component={Dashboard}/>
        <PrivateRoute path='/checkout' component={Checkout} />
        <PrivateRoute path='/cart' component={Orders} />
        <PrivateRoute path='/menu' component={Menu} />
        <PrivateRoute path='/' component={Menu} />
    </Switch>
);

export default routes;
