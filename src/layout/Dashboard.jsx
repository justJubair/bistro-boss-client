import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Dashboard = () => {
    return(
        <>
       <div className="flex justify-between">
       <div className="w-64 h-screen bg-[#D1A054] text-black">
             <ul className="uppercase p-8 font-bold">
                <li><NavLink className="flex items-center gap-2" to="/myCart"><AiOutlineShoppingCart size={25}/>my cart</NavLink></li>
             </ul>
        </div>
        <div className="flex-1">
        <Outlet/>
        </div>
       </div>
        </>
    )}
export default Dashboard;

