import {useEffect, useState} from 'react';
import {getAllUsers} from './services/user.api';
import Users from './components/Users/Users';

export default function App() {

    let [users, setUsers] = useState([]);

    let [user, setUser] = useState({});
    useEffect(() => {
        getAllUsers().then(value => setUsers([...value]));
    }, []);

    const fromApp = (id) => {
        setUser({...users.find(value => value.id === id)});
    };

    return (
        <div>
            <h2>{user.username}</h2>
            <Users usersList={users} fromApp={fromApp}/>

        </div>
    );
}
