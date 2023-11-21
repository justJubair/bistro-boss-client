import axios from "axios"

const instance = axios.create({
    baseURL: "https://bistro-boss-server-ten-gray.vercel.app/api/v1"
})
const useAxios = ()=>{
    return instance
}

export default useAxios