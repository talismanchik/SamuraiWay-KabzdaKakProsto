import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer1";
import {UsersContainer} from "./components/Users/UsersContainer";


function App() {
    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>


                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
