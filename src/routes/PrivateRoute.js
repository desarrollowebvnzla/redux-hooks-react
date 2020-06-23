import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, path }) {
    let isAuthenticated = localStorage.getItem("@accessToken");
    return (
        <Route
            path={path}
            render={({ location }) =>
                isAuthenticated ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );
}
