import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user} = useAuth()
  const navLinks = (
    <>
      <li className="uppercase">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/ourMenu">our menu</NavLink>
      </li>
      <li className="uppercase"> 
        <NavLink to="/ourKitchen/salad">our kitchen</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/contact">contact us</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/dashboard">dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className=" flex text-white items-center absolute top-0 z-10 w-full justify-between mx-auto bg-black/50 px-6 py-4">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          style={{ fontFamily: "Cinzel" }}
          className=" leading-tight text-lg uppercase font-bold"
        >
          bistro boss  <span className="font-medium">restaurant</span>
        </Link>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal ">{navLinks}</ul>
        {
          user ?  <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> :  <Link to="/login" className="btn">Login</Link>
        }
         
        
      </div>
    </div>
  );
};
export default Navbar;
