import React from "react";
import style from './Users.module.css'
import axios from "axios";
import noAva from '../../pic/noname.jpg'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let newPages
        if (this.props.currentPage<=5) {
            newPages = pages.slice(0,10)
        } else {
            newPages=pages.slice(this.props.currentPage-5,this.props.currentPage+5)
        }




        return <div>
            <div>
                {
                    newPages.map(p => {
                        return <span className={p === this.props.currentPage && style.selectedPage}
                                     onClick={()=>{this.onPageChanged(p)}}>{p} </span>
                    })
                }
            </div>

            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={style.ava}>
                            <img src={u.photos.small != null ? u.photos.small : noAva}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
    }
}

export default Users