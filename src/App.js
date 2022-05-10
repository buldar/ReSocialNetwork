import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from 'react-router-dom'


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<Dialogs
                        dispatch={props.dispatch}
                        state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile
                        dispatch={props.dispatch}
                        addPost={props.addPost}
                        profilePage={props.state.profilePage}/>}/>
                    <Route path="*" element={<h1>Not found</h1>}/>
                </Routes>
            </div>


            {/*<footer className='footer'>Footer</footer>*/}
        </div>

    )
}

export default App;
