import { useQuery } from "@tanstack/react-query";
import Container from "../../../Shared/Container/Container";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoWallet } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { FaTruck } from "react-icons/fa";
const AdminHome = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: stats=[]} = useQuery({
        queryKey: ["stats"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/adminStats")
            return res.data
        }
    })
   
    
    return(
        <Container>
             <h2 className="text-2xl font-bold my-6"> HELLO, welcome back <span>{user?.displayName}</span> </h2>

             {/* main container */}
             <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* State ONE */}
                <div className="flex items-center rounded-lg p-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                    <IoWallet size={50}/>
                    <div className="font-bold ml-4 text-center">
                        <h3 className="text-2xl">{stats?.revenue}</h3>
                        <p className="text-xl">Revenue</p>
                    </div>
                </div>
                {/* State Two */}
                <div className="flex items-center rounded-lg p-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                    <FaUsers size={50}/>
                    <div className="font-bold ml-4 text-center">
                        <h3 className="text-2xl">{stats?.users}</h3>
                        <p className="text-xl">Users</p>
                    </div>
                </div>
                {/* State Three */}
                <div className="flex items-center rounded-lg p-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                    <SiCodechef size={50}/>
                    <div className="font-bold ml-4 text-center">
                        <h3 className="text-2xl">{stats?.menus}</h3>
                        <p className="text-xl">Menus</p>
                    </div>
                </div>
                {/* State ONE */}
                <div className="flex items-center rounded-lg p-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                    <FaTruck size={50}/>
                    <div className="font-bold ml-4 text-center">
                        <h3 className="text-2xl">{stats?.payments}</h3>
                        <p className="text-xl">Orders</p>
                    </div>
                </div>
             </div>
        </Container>
    )}
export default AdminHome;