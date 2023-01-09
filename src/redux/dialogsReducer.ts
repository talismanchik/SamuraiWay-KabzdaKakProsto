import {ActionsType, messagesPageType, messageType} from "./state";
import {v1} from "uuid";

export type AddMessageAT ={
    type: 'ADD_MESSAGE'
}
export type UpdateNewMessageTextAT = {
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    text: string
}

export const dialogsReducer = (state: messagesPageType, action: ActionsType): messagesPageType => {

    switch (action.type) {
        case 'ADD_MESSAGE':
            const createMessageItem:messageType = {id: v1(), message:state.newMessage}
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