import React from "react";
import {connect} from "react-redux";
import {
    acceptFollow, getUsers,
    toggleFollowingProgress,
    acceptUnfollow, unfollow, follow
} from "../../redux/users-reducer";
import {Users} from "./Users";
import loader from '../../pic/loader.gif'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={loader}/> :
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />}

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {acceptFollow, acceptUnfollow, toggleFollowingProgress, getUsers, unfollow, follow})
)(UsersContainer)

//
// const UsersWithRedirect = withAuthRedirect(UsersContainer)
//
// export default connect(mapStateToProps,
//     {acceptFollow, acceptUnfollow, toggleFollowingProgress, getUsers, unfollow, follow})(UsersWithRedirect)