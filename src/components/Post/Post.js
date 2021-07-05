export default function Post({item, fnMother}){
    return (
        <div>
            {item.id} - {item.name} -
            <button onClick={
                () => fnMother(item.id)
            }>
                click me
            </button>
        </div>
    )
}