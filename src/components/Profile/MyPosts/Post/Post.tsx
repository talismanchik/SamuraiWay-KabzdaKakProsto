import React from "react";
import s from "./Post.module.css"


type PostTypeProps = {
    message: string;
    like: number;

}

const Post = (props: PostTypeProps) => {
    return (
        <div className={s.item}>
            <img
                alt={"foto"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuA4JOqARyDKfg3-EsltTvxG8meA1ABOHx3g&usqp=CAU"/>
            {props.message}
            <div>
                <span>like: {props.like}</span>

            </div>
        </div>
    )
}

export default Post;