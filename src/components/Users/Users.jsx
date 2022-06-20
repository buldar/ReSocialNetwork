import React from "react";
import style from './Users.module.css'
import axios from "axios";
import noAva from '../../pic/noname.jpg'

export const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response=>{
                props.setUsers(response.data.items)
            })

        // props.setUsers([
        //     {
        //         id: 1,
        //         followed: true,
        //         fullName: 'Gupik',
        //         status: 'in Poland',
        //         location: {city: 'Dnipro', country: 'Ukraine'},
        //         avatar: AVA
        //     },
        //     {
        //         id: 2,
        //         followed: false,
        //         fullName: 'Vitaly',
        //         status: 'learning React',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         avatar: AVA
        //     },
        //     {
        //         id: 3,
        //         followed: true,
        //         fullName: 'Andrey',
        //         status: 'hard work',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         avatar: AVA
        //     },
        //     {
        //         id: 4,
        //         followed: true,
        //         fullName: 'Toha',
        //         status: 'best designer here!',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         avatar: AVA
        //     },
        //     {
        //         id: 5,
        //         followed: true,
        //         fullName: 'Natasha',
        //         status: 'vacations!',
        //         location: {city: 'Berezovka', country: 'Belarus'},
        //         avatar: AVA
        //     }
        // ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={style.ava}>
                            <img src={u.photos.small!=null?u.photos.small:noAva}/>
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