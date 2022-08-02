import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

const withRouter = (Component) => {
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


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)