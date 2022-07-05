import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setFetchingFalseAC, setFetchingTrueAC,
    setTotalUsersCountAC,
    setUserAC,
    unfollowAC,
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import loader from '../../pic/loader.gif'

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setFetchingTrue()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setFetchingFalse()
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.setFetchingTrue()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFetchingFalse()
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={loader}/>:
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
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage:(currentPage)=> {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount)=> {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setFetchingTrue:()=>{
            dispatch(setFetchingTrueAC())
        },
        setFetchingFalse:()=>{
            dispatch(setFetchingFalseAC())
        },
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)