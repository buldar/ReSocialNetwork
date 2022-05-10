import {NavLink} from "react-router-dom";
import style from "./DialogsItem.module.css";
import React from "react";

export const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}
                     className={x => x.isActive ? style.dialog + ' ' + style.active : style.dialog}>
                <img src={props.ava} />
                {props.name} </NavLink>
        </div>
    )
}