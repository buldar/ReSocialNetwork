import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage
                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator())
                }
                let newMessageChange = (newText) => {
                    store.dispatch(updateNewMessageTextActionCreator(newText))
                }
                return (
                    <Dialogs
                        dialogPage={state}
                        onSendMessageClick={onSendMessageClick}
                        newMessageChange={newMessageChange}
                    />
                )
            }
        }
        </StoreContext.Consumer>

    )
}