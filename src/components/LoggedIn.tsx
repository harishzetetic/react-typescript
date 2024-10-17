import { useState } from "react"


type User = {
    name: string,
    email:string    
}
export default function LoggedIn(){
    const [user, setUser] = useState<User>({} as User)
    const handleLogin=()=>{
        setUser({
            name: 'Harish Sharma',
            email: 'harish@gmail.com'
        })
    }
    const handleLogout=()=>{
       //  setUser(null)
    }
    return <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>Login user is {user.name} with email {user.email}</div>
    </>
}