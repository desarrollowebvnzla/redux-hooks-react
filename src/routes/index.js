import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import HomeAdmin from "./views/admin/HomeAdmin";
import AddPortafolio from "./views/admin/AddPortafolio";
import EditPortafolio from "./views/admin/EditPortafolio";
import Login from "./views/admin/Login";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "./views/NotFoundPage";
import Profile from "./views/admin/Profile";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <PrivateRoute path="/admin" component={HomeAdmin} exact />
                <PrivateRoute path="/admin/add" component={AddPortafolio} />
                <PrivateRoute
                    path="/admin/edit/:id"
                    component={EditPortafolio}
                    exact
                />
                <PrivateRoute path="/profile" component={Profile} />

                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
}
if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
