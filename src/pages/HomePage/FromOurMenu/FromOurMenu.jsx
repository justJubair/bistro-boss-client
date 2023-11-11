import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuCard from "./MenuCard";

const FromOurMenu = () => {
    const [menus, setMenus] = useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=> res.json())
        .then(data=>{
            const popularMenu = data.filter(item=> item.category === "popular")
            setMenus(popularMenu)
        })
    },[])
    return(
        <div className="mb-16">
            <SectionTitle subHeading="check it out" heading="from our menu"/>
            <div className="max-w-screen-xl mt-10 px-4 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
                {
                    menus?.map(menu=> <MenuCard key={menu._id} menu={menu}/>)
                }
            </div>
            <div className="text-center my-10">
            <button className="btn btn-outline border-x-0 border-t-0 border-b-4 hover:bg-[#D99904]">view full menu</button>
            </div>
        </div>
    )}
export default FromOurMenu;