import User from '../User/User';

export default function Users({usersList,fromApp}) {
    return (
        <div>
            {

                usersList.map(value => <User key={value.id} singleUser={value} fromApp={fromApp}/>)
            }


        </div>
    );
}