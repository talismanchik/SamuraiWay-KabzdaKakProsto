import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
    addPost: (postMessage: string)=>void
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile' render={()=><Profile posts={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path='/dialogs' render={()=><Dialogs messages={props.state.messagesPage}/>}/>
                    <Route path='/news' render={()=><News />}/>
                    <Route path='/music' render={()=><Music />}/>
                    <Route path='/settings' render={()=><Settings />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
