import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin = ()=>{
    const {user, isLoading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const  {data: isAdmin, isPending} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !isLoading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data?.admin
        }
        
    })
    return [isAdmin, isPending]
}

export default useAdmin