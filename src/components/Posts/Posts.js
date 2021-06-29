import Post from "../Post/Post";
import {useEffect, useState} from "react";

export default function Posts(){

    let [posts, setPosts] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromServer => {
                setPosts(postsFromServer);
            });
    }, []);


    return (
        <div>
            {
                posts.map(post =>  <Post item ={post}/>)
            }
        </div>
    )

}