import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setMyProfile, setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {userId=6164}
        this.props.setMyProfile(userId)
    }
    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId
        if (prevProps.router.params.userId !== userId) {
            let userId = 6164
            this.props.setMyProfile(userId)
        }
    }
    //need read about this

    render() {
        return <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
    }
}

const mapStateToProps = (props) => ({
    profile: props.profilePage.profile
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}
//need read about this


export default connect (mapStateToProps, {setUserProfile, setMyProfile})(withRouter(ProfileContainer))