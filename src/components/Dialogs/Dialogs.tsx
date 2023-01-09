import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./DialogItem/DialogItem";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsReducer";
import {ActionsType, messagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messages: messagesPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsDataMap = props.messages.dialogs.map((el, key) =>
        <Dialog key={key} id={el.id} name={el.name}/>    )
    let messagesDataMap = props.messages.messages.map((el, key) =>
        <Message key={key} message={el.message}/>    )

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(UpdateNewMessageTextAC(text))
    }
    const addNewMessage = () => {
        props.dispatch(AddMessageAC())
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsDataMap}
        </div>
        <div className={s.messages}>
            {messagesDataMap}
        </div>
        <div>
            <textarea value={props.messages.newMessage}
                      onChange={onMessageChange}
                      placeholder={'Enter your message'}
            ></textarea>
            <button onClick={addNewMessage}>Send</button>
        </div>
    </div>
}