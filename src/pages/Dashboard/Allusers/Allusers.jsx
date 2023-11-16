import { useQuery } from "@tanstack/react-query";
import Table from "../../../Shared/Table/Table";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Allusers = () => {
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const res = await axiosSecure("/users")
            return res.data;
        }
    })
    console.log(data)
    return(
        <div>
            <Table data={data} allUsers={true}/>
        </div>
    )}
export default Allusers;