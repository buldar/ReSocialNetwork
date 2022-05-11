import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



export const MyPosts = (props) => {

    let postsElements = props.posts.map(item => <Post message={item.message}
                                                      id={item.id}
                                                      likeCount={item.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let newPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(newText))
    }


    return (
        <div className={style.postsBlock}>
            <div><h3>My posts</h3></div>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={newPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}