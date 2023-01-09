import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { AddPostAC, UpdateNewPostTextAC} from '../../../redux/profileReducer'
import {ActionsType, profilePageType} from '../../../redux/state'


type MyPostsPropsType = {
    posts: profilePageType
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsDataMap = props.posts.posts.map((el, index) => {
        return <div key={index}>
            <Post message={el.message} like={el.like}/>
        </div>

    })

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(UpdateNewPostTextAC(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                              value={props.posts.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={()=>props.dispatch(AddPostAC())}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsDataMap}
            </div>
        </div>
    )
}

export default MyPosts;