import React from "react";
import {AddPostAC, UpdateNewPostTextAC} from '../../../redux/profileReducer'
import {connect} from "react-redux";
import {stateType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";


const mapStateToProps =(state: stateType)=>{
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps =(dispatch: Dispatch)=>{
    return{
        updateNewPostText: (text: string)=>{
            dispatch(UpdateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(AddPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);