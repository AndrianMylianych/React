import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Users from './components/users/Users';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (

        <Router>
            <div>
                <div>
                    <Link to={'/users'}>users names</Link>
                    <br/>
                    <Link to={'/posts'}>users posts</Link>
                    <br/>
                    <Link to={'/comments'}>users comments</Link>
                </div>

                <Switch>
                    <Route exact path={'/users/:id/posts'} component={Posts}/>
                    <Route exact path={'/users'} component={Users}/>

                    <Route exact path={'/posts'} component={Posts}/>

                    <Route exact path={'/comment'} component={Comments}/>
                </Switch>
            </div>
        </Router>

        /*<Router>
            <div>
                <div>
                    <Link to={'/users'}>users page</Link>
                </div>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                </Switch>

            </div>
        </Router>*/
    );
}

