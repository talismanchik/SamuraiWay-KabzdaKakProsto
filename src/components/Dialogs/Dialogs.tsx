import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./DialogItem/DialogItem";
import {messagesPageType} from "../../redux/state";

type DialogsPropsType = {
    onMessageChange: (text: string) => void
    onSendMessage: () => void
    dialogsPage: messagesPageType

}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsDataMap = props.dialogsPage.dialogs.map((el, key) =>
        <Dialog key={key} id={el.id} name={el.name}/>)
    let messagesDataMap = props.dialogsPage.messages.map((el, key) =>
        <Message key={key} message={el.message}/>)

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.onMessageChange(text)
    }
    const addNewMessage = () => {
        props.onSendMessage()
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsDataMap}
        </div>
        <div className={s.messages}>
            {messagesDataMap}
        </div>
        <div>
            <textarea value={props.dialogsPage.newMessage}
                      onChange={onMessageChange}
                      placeholder={'Enter your message'}
            ></textarea>
            <button onClick={addNewMessage}>Send</button>
        </div>
    </div>
}