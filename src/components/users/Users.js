import {useEffect, useState} from 'react';
import User from '../user/User';
import {getUsers} from "../../services/API";

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    })

    return(
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    )


    /*let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });

    }, []);
    return (
        <div>

            {
                users.map(value => <User item={value} key={value.id}/>)

            }


        </div>
    );*/
}