import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";



export const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const updateNewPostChange = (text)=> {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts posts={state.posts}
                 addPost={addPost}
                 updateNewPostChange={updateNewPostChange}
                 newPostText={state.newPostText}
        />
    )
}