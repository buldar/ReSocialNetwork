import React, {createRef} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>)

    let messageElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessageText = React.createRef()

    let addMessage = () => {
        let text=newMessageText.current.value
        props.addMessage(text)
        newMessageText.current.value=''
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
                        <div><textarea ref={newMessageText}/></div>
                        <button onClick={addMessage}>add</button>
                    </div>
                </div>


            </div>
        </div>
    )
}