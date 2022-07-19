import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Navigate} from "react-router";

export const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>)
    let messageElements = props.dialogPage.messages.map(m => <Message message={m.message}/>)


    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let newMessageChange = (e) => {
        let newText = e.currentTarget.value
        props.newMessageChange(newText)
    }

    if (props.isAuth===false) {
        return <Navigate to={'/login'}/>
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
                                      value={props.dialogPage.newMessageText}/>
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