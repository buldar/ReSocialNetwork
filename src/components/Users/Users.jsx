import React from "react";
import style from "./Users.module.css";
import noAva from "../../pic/noname.jpg";

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
                                     onClick={()=>{props.onPageChanged(p)}}>{p} </span>
                    })
                }
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={style.ava}>
                            <img src={u.photos.small != null ? u.photos.small : noAva}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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