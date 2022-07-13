const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_FETCHING_TRUE = 'SET-FETCHING-TRUE'
const SET_FETCHING_FALSE = 'SET-FETCHING-FALSE'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'

export let AVA = 'https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg'

let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u,followed: true}
                    } else {
                        return u
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        //hmmm. need make one AC for both cases...
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_FETCHING_TRUE:
            return {
                ...state,
                isFetching: true
            }
        case SET_FETCHING_FALSE:
            return {
                ...state,
                isFetching: false
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.id]
                    :[state.followingInProgress.filter(id=>id!==action.id)]

            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW,  userId})
export const unfollow = (userId) => ({type: UNFOLLOW,  userId})
export const setUsers = (users) => ({type: SET_USERS,  users})
export const setCurrentPage = (currentPage)=>({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setFetchingTrue = () => ({type:SET_FETCHING_TRUE})
export const setFetchingFalse = () => ({type:SET_FETCHING_FALSE})
export const toggleFollowingProgress = (id, isFetching) =>({type:TOGGLE_FOLLOWING_PROGRESS, id, isFetching})