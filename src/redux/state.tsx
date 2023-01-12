import {AddPostAT, UpdateNewPostTextAT} from "./profileReducer";
import {AddMessageAT, UpdateNewMessageTextAT} from "./dialogsReducer";

export type dialogType = {
    id: string
    name: string
}
export type postType = {
    id: string
    message: string
    like: number
}
export type messageType = {
    id: string
    message: string
}
export type messagesPageType = {
    messages: messageType[]
    dialogs: dialogType[]
    newMessage: string
}
export type profilePageType = {
    posts: postType[],
    newPostText: string
}


export type ActionsType = AddPostAT | UpdateNewPostTextAT | AddMessageAT | UpdateNewMessageTextAT
// export let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: "Hi, how are you", like: 15},
//                 {id: v1(), message: "This is my first post", like: 20},
//                 {id: v1(), message: "This is my second post", like: 25}
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             messages: [
//                 {id: v1(), message: 'Hi'},
//                 {id: v1(), message: 'how are you'},
//                 {id: v1(), message: 'Have a good day'},
//                 {id: v1(), message: 'you are beautiful'}
//             ],
//             dialogs: [
//                 {id: v1(), name: 'Sveta'},
//                 {id: v1(), name: 'Max'},
//                 {id: v1(), name: 'Pasha'},
//                 {id: v1(), name: 'Vitya'},
//                 {id: v1(), name: 'Petya'},
//                 {id: v1(), name: 'Katya'},
//                 {id: v1(), name: 'Dasha'}
//             ],
//             newMessage: '',
//         },
//         sidebar: {}
//     } as stateType,
//     _callSubscriber() {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action: ActionsType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber()
//       }
// }

