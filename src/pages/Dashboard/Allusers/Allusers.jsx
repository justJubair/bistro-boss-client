import { useQuery } from "@tanstack/react-query";
import Table from "../../../Shared/Table/Table";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data, refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const res = await axiosSecure("/users")
            return res.data;
        }
    })
   
    return(
        <div>
            <Table data={data} refetch={refetch} allUsers={true}/>
        </div>
    )}
export default AllUsers;