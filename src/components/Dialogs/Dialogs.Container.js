import React from "react";
import dialogsReducer, {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
//
// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().dialogsPage
//                 let onSendMessageClick = () => {
//                     store.dispatch(addMessageActionCreator())
//                 }
//                 let newMessageChange = (newText) => {
//                     store.dispatch(updateNewMessageTextActionCreator(newText))
//                 }
//                 return (
//                     <Dialogs
//                         dialogPage={state}
//                         onSendMessageClick={onSendMessageClick}
//                         newMessageChange={newMessageChange}
//                     />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//
//     )
// }
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