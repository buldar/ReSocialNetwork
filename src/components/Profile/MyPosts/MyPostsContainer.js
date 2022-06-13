import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
// import {StoreContext} from "../../../StoreContext";

// export const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().profilePage
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 const updateNewPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 }
//                 return (
//                     <MyPosts posts={state.posts}
//                              addPost={addPost}
//                              updateNewPostChange={updateNewPostChange}
//                              newPostText={state.newPostText}
//                     />)
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)