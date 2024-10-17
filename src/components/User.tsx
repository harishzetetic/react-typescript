
type UserProps = {
    name: {
        first: string,
        last: string
    },
    otherUsers: {
        first: string,
        last: string
    }[]
}


export default function User(props: UserProps){
    return <div>
        {props.name.first} {props.name.last}
        <h2>Other Users</h2>
        <ul>
            {props.otherUsers.map((item, index) => <li key={index}>{item.first} {item.last}</li>)}
        </ul>
        </div>
}