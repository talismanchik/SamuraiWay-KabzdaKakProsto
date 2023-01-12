import React from "react";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps =(state: stateType)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps =(dispatch: Dispatch)=>{
    return {
        onMessageChange: (text: string) =>{
            dispatch(UpdateNewMessageTextAC(text))
        },
        onSendMessage: ()=>{
           dispatch(AddMessageAC())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);