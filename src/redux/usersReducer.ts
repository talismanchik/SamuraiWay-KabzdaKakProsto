
type locationType = {
    city: string,
    country: string
}
export type userType = {
    id: string,
    avatar: string
    fullName: string,
    status: string,
    location: locationType,
    followed: boolean
}
export type usersPageType = {
    users: userType[]
}

export type FollowAT = {
    type: 'FOLLOW'
    userID: string
}
export type UnFollowAT = {
    type: 'UNFOLLOW',
    userID: string
}
export type SetUsersAT = {
    type: 'SET_USERS',
    users: userType[]
}

const initialState: usersPageType = {
     users: [
    //     {
    //         id: v1(),
    //         avatar: 'https://damion.club/uploads/posts/2022-09/1664306876_21-damion-club-p-faier-fiksiki-art-krasivo-21.png',
    //         fullName: 'Eugene',
    //         status: 'I\'m a Boss',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         followed: false
    //     },
    //     {
    //         id: v1(),
    //         avatar: 'https://phonoteka.org/uploads/posts/2021-05/1621390134_20-phonoteka_org-p-fiksiki-fon-24.png',
    //         fullName: 'Nadya',
    //         status: 'I\'m a Boss too',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         followed: true
    //     },
    //     {
    //         id: v1(),
    //         avatar: 'https://slovnet.ru/wp-content/uploads/2018/11/20-10.png',
    //         fullName: 'Gleb',
    //         status: 'No status',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         followed: true
    //     },
    //     {
    //         id: v1(),
    //         avatar: 'https://www.prorobot.ru/gallery/foto/11110235370.png',
    //         fullName: 'Olya',
    //         status: 'Nice day',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         followed: false
    //     },
    ],

}
export type ActionsType = FollowAT | UnFollowAT | SetUsersAT;

export const usersReducer = (state: usersPageType = initialState, action: ActionsType): usersPageType => {


    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users
                ]}
        default:
            return state
    }
}

export const FollowAC = (userID: string): FollowAT => {
    return {type: 'FOLLOW', userID}
}
export const UnFollowAC = (userID: string): UnFollowAT => {
    return {type: 'UNFOLLOW', userID}
}
export const SetUsersAC = (users: userType[]): SetUsersAT => {
    return {type: 'SET_USERS', users}
}