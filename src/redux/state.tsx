import {v1} from "uuid";

export type dialogType={
    id: string
    name:string
}

export type postType={
    id: string
    message: string
    like: number
}

export type messageType={
    id: string
    message: string
}

export type messagesPageType = {
    messages: messageType[]
    dialogs:  dialogType[]
}

export type profilePageType = {
    posts: postType[]
}

export type stateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}

export let state: stateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi, how are you", like: 15},
            {id: v1(), message: "This is my first post", like: 20},
            {id: v1(), message: "This is my second post", like: 25}
        ]
    },
    messagesPage: {
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'how are you'},
            {id: v1(), message: 'Have a good day'},
            {id: v1(), message: 'you are beautiful'}
            ],
        dialogs: [
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Max'},
            {id: v1(), name: 'Pasha'},
            {id: v1(), name: 'Vitya'},
            {id: v1(), name: 'Petya'},
            {id: v1(), name: 'Katya'},
            {id: v1(), name: 'Dasha'}
        ]
    }
}