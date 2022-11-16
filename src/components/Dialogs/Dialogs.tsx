import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropstType = {
    id: number
    name: string

}
const Dialog = (props: DialogPropstType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog name={'Sveta'} id={1}/>
            <Dialog name={'Max'} id={2}/>
            <Dialog name={'Pasha'} id={3}/>
            <Dialog name={'Vitya'} id={4}/>
            <Dialog name={'Petya'} id={5}/>
            <Dialog name={'Katya'} id={6}/>
            <Dialog name={'Dasha'} id={7}/>
        </div>
        <div className={s.messages}>
            <Message message={'hi'}></Message>
            <Message message={'how are you'}></Message>
            <Message message={'yo'}></Message>

        </div>
    </div>
}