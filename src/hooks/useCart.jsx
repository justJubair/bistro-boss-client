import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"
import useAuth from "./useAuth"

const useCart = ()=>{
    const {user} = useAuth()
    const axios = useAxios()
    const {data, refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async()=>{
            const res = await axios.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
  
    return [data, refetch]
    
}

export default useCart

// http://localhost:5000/api/v1/carts?email=joey@gmail.com