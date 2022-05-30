import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props) => {

    let state=props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let newMessageChange = (newText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newText))
    }

    return (
        <Dialogs
            dialogPage={state}
            onSendMessageClick={onSendMessageClick}
            newMessageChange={newMessageChange}
        />
    )
}