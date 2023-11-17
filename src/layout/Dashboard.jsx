import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillCalendar,
  AiFillContacts,
  AiFillHome,
  AiFillRead,
  AiFillShop,
  AiFillWallet,
  AiOutlineAccountBook,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [isAdmin] = useAdmin()
 
  return (
    <>
      <div className="flex justify-between md:gap-6 lg:gap-10">
        <div className="w-64 min-h-screen bg-[#D1A054] text-black">
          <ul className="uppercase p-8 font-bold space-y-6">
            {
                isAdmin ? <>
                 <li>
              <NavLink className="flex items-center gap-2">
                <AiFillHome size={25} />
                admin home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addItems" className="flex items-center gap-2">
                <AiFillCalendar size={25} />
              add items
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2">
                <AiFillWallet size={25} />
               manage items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/users" className="flex items-center gap-2">
                <AiOutlineUser size={25} />
              all users
              </NavLink>
            </li>
           
            <li>
              <NavLink className="flex items-center gap-2">
                <AiOutlineAccountBook size={25} />
                manage booking
              </NavLink>
            </li>
                </> : <>
                 <li>
              <NavLink className="flex items-center gap-2">
                <AiFillHome size={25} />
                user home
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2">
                <AiFillCalendar size={25} />
                reservation
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2">
                <AiFillWallet size={25} />
                payment history
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart" className="flex items-center gap-2">
                <AiOutlineShoppingCart size={25} />
                my cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addReview"
                className="flex items-center gap-2"
              >
                <AiFillRead size={25} />
                add review
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2">
                <AiOutlineAccountBook size={25} />
                my booking
              </NavLink>
            </li>
                </>
            }
           

            <div className="divider"> </div>
            <li>
              <NavLink to="/" className="flex items-center gap-2">
                <AiFillHome size={25} />
                home
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2">
                <AiOutlineMenu size={25} />
                menu
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2">
                <AiFillShop size={25} />
                shop
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2">
                <AiFillContacts size={25} />
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="max-w-screen-lg  mx-auto flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
