import React from "react";
// import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC,
    unfollowAC,
    usersReducer
} from "../../redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)