import { useEffect, useState } from "react"
import useAxios from "./useAxios"


const useMenus = ()=>{
    const axios = useAxios()
    const [menus, setMenus] = useState([])
    useEffect(()=>{
    axios.get("/menus")
        .then(data =>{
            setMenus(data.data)
        })
    },[axios])
    
    return menus
   
}

export default useMenus