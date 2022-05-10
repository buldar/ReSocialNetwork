import reportWebVitals from './reportWebVitals';
import {state, subscribe, store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, UpdateNewPostChange} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter><App
                UpdateNewPostChange={UpdateNewPostChange}
                addPost={addPost}
                state={state}
                addMessage={addMessage}/>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)



reportWebVitals();
