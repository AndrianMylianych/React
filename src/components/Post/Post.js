import "./Post.css"

export default function Post(props){
    let {item: post} = props;
    return (
        <div className={"out"}>
            <div className={"in"}>
                {post.id} - {post.title} - {post.body}
            </div>
        </div>
    )
}
