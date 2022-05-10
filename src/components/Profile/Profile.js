import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     UpdateNewPostChange={props.UpdateNewPostChange}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}