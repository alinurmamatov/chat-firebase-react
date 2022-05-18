import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext"


export const Dashboard = () => {
    const {user} = useAuthContext();

    return user ? (
    <div>
        <h1>Dashboard page</h1>
    </div> ) : (
    <Navigate to={'/signin'}/>)
}