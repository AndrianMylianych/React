import Post from "../Post/Post";

export  default  function Posts({items, appMn}){

    return (
        <div>
            {
                items.map((value) =>  <Post item={value} key={value.id} fnMother={appMn}/>)
            }
        </div>
    )
}