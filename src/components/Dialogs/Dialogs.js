import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

export const Dialogs = (props) => {

    let state=props.store.getState().dialogsPage

    let dialogElements = state.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message}/>)


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let newMessageChange = (e) => {
        let newText=e.currentTarget.value
        props.store.dispatch(updateNewMessageTextActionCreator(newText))
    }

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={style.messages}>
                    <div>{messageElements}</div>
                    <div>
                        <div>
                            <textarea onChange={newMessageChange}
                                      value={state.newMessageText}/>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>add</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}