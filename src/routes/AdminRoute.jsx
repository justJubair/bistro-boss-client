/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const [isAdmin, isPending] = useAdmin()
    const {user, isLoading} = useAuth()

    if(isLoading || isPending){
        return <p>loading..</p>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login"/>
   
    }
export default AdminRoute;