import {ActionsType, messagesPageType, messageType} from "./state";
import {v1} from "uuid";

export type AddMessageAT = {
    type: 'ADD_MESSAGE'
}
export type UpdateNewMessageTextAT = {
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    text: string
}

const initialState = {
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
    ],
    newMessage: '',
}

export const dialogsReducer = (state: messagesPageType = initialState, action: ActionsType): messagesPageType => {

    switch (action.type) {
        case 'ADD_MESSAGE':
            const createMessageItem: messageType = {id: v1(), message: state.newMessage}
            state.messages.push(createMessageItem)
            state.newMessage = ''
            return state
        case    'UPDATE_NEW_MESSAGE_TEXT':
            state.newMessage = action.text
            return state
        default:
            return state
    }
}

export const AddMessageAC = (): AddMessageAT => {
    return {type: 'ADD_MESSAGE'}
}
export const UpdateNewMessageTextAC = (text: string): UpdateNewMessageTextAT => {
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', text}
}