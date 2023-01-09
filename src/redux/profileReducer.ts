import {ActionsType, postType, profilePageType} from "./state";
import {v1} from "uuid";

export type AddPostAT = {
    type: 'ADD_POST'
}
export type UpdateNewPostTextAT = {
    type: 'UPDATE_NEW_POST_TEXT',
    text: string
}

const initialState = {
    posts: [
        {id: v1(), message: "Hi, how are you", like: 15},
        {id: v1(), message: "This is my first post", like: 20},
        {id: v1(), message: "This is my second post", like: 25}
    ],
    newPostText: '',
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {

    switch (action.type) {
        case 'ADD_POST':
            const newPost: postType = {
                id: v1(),
                message: state.newPostText,
                like: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case    'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}

export const AddPostAC = (): AddPostAT => {
    return {type: 'ADD_POST'}
}
export const UpdateNewPostTextAC = (text: string): UpdateNewPostTextAT => {
    return {type: 'UPDATE_NEW_POST_TEXT', text}
}