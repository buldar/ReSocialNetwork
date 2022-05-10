import React from "react";
import style from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";

export const Navbar = () => {
    return (

        <div className={style.nav}>
            <div><NavLink to='/profile' className={x => x.isActive ? style.active : style.item}>Profile</NavLink></div>
            <div><NavLink to='/dialogs' className={x => x.isActive ? style.active : style.item}>Dialogs</NavLink></div>
            <div><NavLink to='/news' className={x => x.isActive ? style.active : style.item}>News</NavLink></div>
            <div><NavLink to='/music' className={x => x.isActive ? style.active : style.item}>Music</NavLink></div>
            <div><NavLink to='/setting' className={x => x.isActive ? style.active : style.item}>Settings</NavLink></div>
        </div>
    )
}