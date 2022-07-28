import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";

// export const withAuthRedirectClass = (Component) => {
//     class RedirectComponent extends React.Component {
//         render() {
//             if (!this.props.isAuth) return <Navigate to={'/login'}/>
//             return <Component {...this.props}/>
//         }
//     }
//
//     return RedirectComponent
// }

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        debugger
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}