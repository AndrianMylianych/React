import Post from '../Post/Post';

export default function Posts({postsList}) {
    return (
        <div>
            {postsList.map(val => <Post key={val.id} singlePost={val}/>)}

        </div>
    );
}