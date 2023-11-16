import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000/api/v1",
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOutUser} = useAuth()
    // request interceptor
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem("access-token")
        config.headers.authorization = `Bearer ${token}`
        return config
    })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async function (error){
        
        const status = error.response.status;
        // for 401 or 403 status code, logout user and move to login page
        if(status === 401 || status === 403){
            await logOutUser()
            navigate("/login")
        }
        return Promise.reject(error)
    })
    return axiosSecure

}
export default useAxiosSecure;