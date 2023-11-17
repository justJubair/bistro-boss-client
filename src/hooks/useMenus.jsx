// import { useEffect, useState } from "react"
import useAxios from "./useAxios"
import { useQuery } from "@tanstack/react-query"


const useMenus = ()=>{
    const axios = useAxios()
    const {data:menus=[], refetch} = useQuery({
        queryKey: ["menus"],
        queryFn: async()=>{
            const res = await axios.get("/menus")
            return res.data;
        }       
    })
   
   return [menus, refetch]
}

export default useMenus