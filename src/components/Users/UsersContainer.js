import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setFetchingFalse, setFetchingTrue,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import loader from '../../pic/loader.gif'
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetchingTrue()
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setFetchingFalse()
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.setFetchingTrue()
        getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setFetchingFalse()
            })
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
                    follow={this.props.follow}/>}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
        setFetchingTrue, setFetchingFalse
    })(UsersContainer)