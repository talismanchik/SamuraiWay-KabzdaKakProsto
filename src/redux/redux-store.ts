import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersPageType, usersReducer} from "./usersReducer";
import {messagesPageType, profilePageType} from "./state";

export type stateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
    usersPage: usersPageType
    // sidebar: sidebarType
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

export let store = createStore(reducers);

export type AppStoreType = typeof store
