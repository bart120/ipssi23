import { Component } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";

const AuthentifiedRoute = (component, ...other) => {
    const user = useSelector((state) => state.user.value);
    return (
        <Route {...other} render={() => {
            return (user ?
                (<Navigate to="404" replace />) :
                (<Component />)
            );
        }} />
    );
}

export default AuthentifiedRoute;

