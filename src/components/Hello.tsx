
type HelloProps = {
    name: string,
    count: number,
    isLoggedIn: boolean
}

function Hello(props: HelloProps){
    if(props.isLoggedIn){
        return <h1>Hi {props.name}, Thanks for watching this video. You have completed {props.count} videoes</h1>
    }
    return <h1>Hi Guest Please logged in first </h1>
}
export default Hello;