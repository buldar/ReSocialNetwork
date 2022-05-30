import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().profilePage
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const updateNewPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (
                    <MyPosts posts={state.posts}
                             addPost={addPost}
                             updateNewPostChange={updateNewPostChange}
                             newPostText={state.newPostText}
                    />)
            }
        }
        </StoreContext.Consumer>
    )
}