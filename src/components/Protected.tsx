import { DashboardTypeProps } from "./Dashboard"
import Login from "./Login"

type ProtectedType = {
    loggedIn: boolean,
    component: React.ComponentType<DashboardTypeProps>
}

export default function Protected({loggedIn, component: Dashboard}: ProtectedType){
    if(loggedIn){
        return <Dashboard name="Harish Sharma"/>
    } else {
        return <Login />
    }
}