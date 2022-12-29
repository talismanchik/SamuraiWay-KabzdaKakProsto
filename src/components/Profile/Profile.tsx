import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

export type ProfilePropsType = {
    posts: profilePageType
    addPost: (postMessage: string)=>void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts}  addPost={props.addPost}/>

        </div>
    )
}

export default Profile;