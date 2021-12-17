import { Switch } from "react-router-dom";
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from "../pages/Dashboard";

export default function Routes () {
    return(
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={SignUp} />

            // apenas pessoas logadas vao acessar essa página
            <Route exact path="/dashboard" componet={Dashboard} isPrivate/>
        </Switch>
    )
}