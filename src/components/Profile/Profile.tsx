import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, profilePageType} from "../../redux/state";

export type ProfilePropsType = {
    posts: profilePageType
    dispatch: (action: ActionsType)=>void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;