import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import Comments from "../comments/Comments";

export default function Post({publication}) {
    return (
        <div>
            {publication.title} - <Link to={'/posts/' + publication.id}>get comments</Link>

            <Route path={'/posts/' + publication.id} component={Comments}/>
        </div>
    );
}