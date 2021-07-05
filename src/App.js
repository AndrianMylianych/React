import {useEffect, useState} from "react";
import {getPost, getPosts, getUser, getUsers} from "./services/API";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

function App() {

    let [user, setUser] = useState(null);

    let appFn = (id) => {
        getUser(id).then(value => setUser(value.data));
    }

    let [users, setUsers] = useState([]);

    useEffect( () => {
        getUsers().then(value => setUsers(value.data));
    }, []);

    let [post, setPost] = useState(null);

    let appMn = (id) => {
        getPost(id).then(value => setPost(value.data));
    }

    let [posts, setPosts] = useState([]);

    useEffect( () =>{
        getPosts().then(value => setPosts(value.data))
    }, []);

    return (
    <div>
        <Users items={users} appFn={appFn}/>
        <hr/>
        {
            user && <div>{JSON.stringify(user.name)}</div>
        }
        <hr/>

        <Posts items={posts} appMn={appMn}/>
        <hr/>
        {
            post && <div>{JSON.stringify(post)}</div>
        }
    </div>
  );
}

export default App;
