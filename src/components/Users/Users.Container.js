import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC, usersReducer} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)