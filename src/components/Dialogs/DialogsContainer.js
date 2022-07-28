import React from "react";
import dialogsReducer, {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)