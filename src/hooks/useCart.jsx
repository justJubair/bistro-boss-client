import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"
import useAuth from "./useAuth"

const useCart = ()=>{
    const {user} = useAuth()
    const axios = useAxios()
    const {data, refetch, isLoading} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async()=>{
            const res = await axios.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
  
    return [data, refetch, isLoading]
    
}

export default useCart

// https://bistro-boss-server-ten-gray.vercel.app/api/v1/carts?email=joey@gmail.com