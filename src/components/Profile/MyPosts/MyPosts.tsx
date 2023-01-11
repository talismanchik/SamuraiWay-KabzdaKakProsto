import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { profilePageType} from '../../../redux/state'


type MyPostsPropsType = {
    profilePage: profilePageType

    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsDataMap = props.profilePage.posts.map((el, index) => {
        return <div key={index}>
            <Post message={el.message} like={el.like}/>
        </div>

    })

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.profilePage.newPostText}
                        onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsDataMap}
            </div>
        </div>
    )
}

export default MyPosts;