import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from 'react-router-dom'
import {DialogsContainer} from "./components/Dialogs/Dialogs.Container";


const App = (props) => {
    debugger
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer
                        store={props.store}/>}
                    />
                    <Route path='/profile' element={<Profile
                        store={props.store}/>}
                    />
                    <Route path="*" element={<h1>Not found</h1>}
                    />
                </Routes>
            </div>


            {/*<footer className='footer'>Footer</footer>*/}
        </div>

    )
}

export default App;
