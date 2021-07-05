import User from "../User/User";

export  default  function Users({items, appFn}){

    return (
        <div>
            {
                items.map((value) =>  <User item={value} key={value.id} fnFather={appFn}/>)
            }
        </div>
    )
}