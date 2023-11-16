/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth()
    if(isLoading){
        return <p>loading...</p>
    }

    if(user){
        return children
    } else{
        return <Navigate to="/login"/>    
    }
    
    }
export default PrivateRoute;