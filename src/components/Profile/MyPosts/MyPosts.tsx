import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postType} from '../../../redux/state'


type MyPostsPropsType={
    posts: postType[]
    addPost: (postMessage: string)=>void
}

const MyPosts= (props: MyPostsPropsType) => {

    let newPostElement = React.useRef<HTMLTextAreaElement | null>(null)


    let postsDataMap = props.posts.map((el, index)=>{
        return<div key={index}>
            <Post message={el.message} like={el.like}/>
        </div>

    })

    const addNewPost =()=>{
        let newPost = newPostElement.current?.value
        newPost && props.addPost(newPost)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsDataMap}
            </div>
        </div>
    )
}

export default MyPosts;