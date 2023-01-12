import React from 'react';
import s from './users.module.css';
import {userType} from "../../redux/usersReducer";
import {v1} from "uuid";
import {DefaultDeserializer} from "v8";

type UsersPropsType = {
    users: userType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: userType[]) => void
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0 ){
        props.setUsers([
                {
                    id: v1(),
                    avatar: 'https://damion.club/uploads/posts/2022-09/1664306876_21-damion-club-p-faier-fiksiki-art-krasivo-21.png',
                    fullName: 'Eugene',
                    status: 'I\'m a Boss',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: false
                },
                {
                    id: v1(),
                    avatar: 'https://phonoteka.org/uploads/posts/2021-05/1621390134_20-phonoteka_org-p-fiksiki-fon-24.png',
                    fullName: 'Nadya',
                    status: 'I\'m a Boss too',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: true
                },
                {
                    id: v1(),
                    avatar: 'https://slovnet.ru/wp-content/uploads/2018/11/20-10.png',
                    fullName: 'Gleb',
                    status: 'No status',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: true
                },
                {
                    id: v1(),
                    avatar: 'https://www.prorobot.ru/gallery/foto/11110235370.png',
                    fullName: 'Olya',
                    status: 'Nice day',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: false
                }
        ])
    }
    return (
        <div>
            {
                props.users.map(el => {
                    return (
                        <div key={el.id}>
                            <span>
                                <img src={el.avatar} alt={'Avatar'} className={s.userAvatar}/>
                                {el.followed
                                    ? <button onClick={()=> props.unFollow(el.id)}>Unfollow</button>
                                    : <button onClick={()=> props.follow(el.id)}>Follow</button> }

                            </span>
                            <span>
                                <span>
                                    <div>
                                        {el.fullName}
                                    </div>
                                    <div>
                                        {el.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {el.location.country}
                                    </div>
                                    <div>
                                        {el.location.city}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};

