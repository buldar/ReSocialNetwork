import React from "react";
import style from './Header.module.css'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={style.header}>
            <Link to="/">
            <img
                src="https://bipbap.ru/wp-content/uploads/2017/10/Prikolnye-i-smeshnye-kartinki-na-avatarku-skachat-besplatno-13.jpg"/>
            </Link>
        </div>
    )
}