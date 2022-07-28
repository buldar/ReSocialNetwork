import React from "react";
import {Navigate} from "react-router";

export const withAuthRedirectClass = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth)  return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent
}

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth)  return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }
 return RedirectComponent
}