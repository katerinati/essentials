import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppLayoutRoute from "./AppLayoutRouter";
import Home from "../Pages/Home";

class AppRouter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <AppLayoutRoute exact={true} path={'/'} component={ Home }/>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;