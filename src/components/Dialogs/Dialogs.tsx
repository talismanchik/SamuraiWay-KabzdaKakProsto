import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./DialogItem/DialogItem";
import {messagesPageType} from "../../redux/state";

type DialogsPropsType={
    messages:messagesPageType
}

export const Dialogs = (props:DialogsPropsType) => {

    let newMessage = React.useRef<HTMLTextAreaElement | null>(null)

    const  addNewMessage =()=>{
        alert(newMessage.current?.value)
    }

    let dialogsDataMap = props.messages.dialogs.map(el=>
    <Dialog id={el.id} name={el.name}/>
    )

    let messagesDataMap = props.messages.messages.map(el=>
    <Message message={el.message}/>
    )

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsDataMap}
        </div>
        <div className={s.messages}>
            {messagesDataMap}
        </div>
        <div>
            <textarea ref={newMessage}></textarea>
            <button onClick={addNewMessage}>Send</button>
        </div>
    </div>
}