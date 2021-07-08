import Posts from '../Posts/Posts';
import {useState} from 'react';
import {getPostsOfUser} from '../../services/post.api';

export default function User({singleUser, fromApp}) {
    let [posts, setPosts] = useState([]);
    return (
        <div>
            {singleUser.name} -
            <button
                onClick={
                    () => {
                        fromApp(singleUser.id);
                        getPostsOfUser(singleUser.id)
                            .then(value => setPosts([...value]));
                    }
                }
            >chose this user</button>

            <div>
                <Posts postsList={posts}/>

            </div>

        </div>
    );
}