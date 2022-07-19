import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 6164
        }
        this.props.getUserProfile(userId)
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId
        if (prevProps.router.params.userId !== userId) {
            let userId = 6164
            this.props.getUserProfile(userId)
        }
    }

    //need read about this

    render() {

        if (this.props.isAuth === false) {
            return <Navigate to={'/login'}/>
        }

        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

const mapStateToProps = (props) => ({
    profile: props.profilePage.profile,
    isAuth: props.auth.isAuth
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

//need read about this


export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))