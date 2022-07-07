import React from "react";
import style from './ProfileInfo.module.css'
import loader from '../../../pic/loader.gif'


export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <img src={loader}/>
    } else {
        return <div>
            <div><img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-1.jpg"/>
            </div>
            <div className={style.name}><h3>{props.profile.fullName}</h3></div>
            <div className={style.description}>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                <div><span>{props.profile.aboutMe}</span></div>
                <div><span>{props.profile.lookingForAJobDescription}</span></div>
            </div>
        </div>
    }

}