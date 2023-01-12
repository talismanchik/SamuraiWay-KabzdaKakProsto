import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {FollowAC, SetUsersAC, UnFollowAC, userType} from "../../redux/usersReducer";

const mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: string) => {
            dispatch(FollowAC(userID))
        },
        unFollow: (userID: string) => {
            dispatch(UnFollowAC(userID))
        },
        setUsers: (users: userType[]) => {
            dispatch(SetUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)