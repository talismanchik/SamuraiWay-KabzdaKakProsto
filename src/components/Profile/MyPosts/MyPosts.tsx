import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postType} from '../../../redux/state'


type MyPostsPropsType={
    posts: postType[]
}

const MyPosts= (props: MyPostsPropsType) => {


    let postsDataMap = props.posts.map(el=>
    <Post message={el.message} like={el.like}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsDataMap}
            </div>
        </div>
    )
}

export default MyPosts;