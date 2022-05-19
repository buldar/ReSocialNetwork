import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";



export const MyPostsContainer = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const updateNewPostChange = (text)=> {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts posts={props.posts}
                 addPost={addPost}
                 updateNewPostChange={updateNewPostChange}
                 newPostText={props.newPostText}
        />
    )
}