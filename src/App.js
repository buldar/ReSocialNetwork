import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/> {/*dont work with '?' params */}
                    <Route path='/profile' element={<ProfileContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path="*" element={<h1>Not found</h1>}/>
                </Routes>
            </div>
            {/*<footer className='footer'>Footer</footer>*/}
        </div>

    )
}

export default App;
