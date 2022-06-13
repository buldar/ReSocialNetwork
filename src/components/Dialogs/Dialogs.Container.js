import React from "react";
import dialogsReducer, {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick:()=>{
            dispatch(addMessageActionCreator())
        },
        newMessageChange: (newText)=>{
            dispatch(updateNewMessageTextActionCreator(newText))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)