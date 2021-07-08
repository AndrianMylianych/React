import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import Posts from '../posts/Posts';

    let user = function User({item}) {
        return(
            <div>
                {item.name} - <Link to={'/users/' + item.id}>get posts</Link>

                <Route path={'/users/' + item.id} component={Posts}/>
            </div>
        )
    }

/*let user = function User({item}) {
    return (
        <div>
            {/!*     /users/3  *!/}
            {item.name} - <Link to={'/users/' + item.id}>get posts</Link>

            {/!*     /users/2  *!/}
            <Route path={'/users/' + item.id} component={Posts}/>
            {/!*<Route path={'/users/:id'} component={Posts}/>*!/}

        </div>
    );
};*/
export default user