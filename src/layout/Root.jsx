import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";



const Root = () => {
    return(
        <div>
            <Navbar/>
             <Outlet/>
             <Toaster/>
        </div>
    )}
export default Root;