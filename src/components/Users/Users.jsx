import React from "react";
import style from "./Users.module.css";
import noAva from "../../pic/noname.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let newPages
    if (props.currentPage <= 5) {
        newPages = pages.slice(0, 10)
    } else {
        newPages = pages.slice(props.currentPage - 5, props.currentPage + 5)
    }


    return (
        <div>
            <div>
                {
                    newPages.map(p => {
                        return <span className={p === props.currentPage && style.selectedPage}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p} </span>
                    })
                }
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={style.ava}>
                            <NavLink to={'/profile/' + u.id}><img
                                src={u.photos.small != null ? u.photos.small : noAva}/></NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'de8c7563-dd18-4912-9001-90e13a939eac'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })

                                }}>Unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'de8c7563-dd18-4912-9001-90e13a939eac'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)

                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}