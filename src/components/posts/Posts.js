import { useEffect, useState } from "react";
import { getPosts, getPostsFromOneUser } from "../../services/API";
import Post from "../post/Post";

export default function Posts({match}) {
const {id} = match.params;
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        id
            ? getPostsFromOneUser(id).then(value => setPosts(value.data))
            : getPosts().then(value => setPosts(value.data))
    }, [id]);

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} publication={value}/>)
            }
        </div>
    );
}
