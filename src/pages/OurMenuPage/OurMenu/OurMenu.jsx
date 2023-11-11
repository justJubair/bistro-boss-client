import CoverPage from "../../../Shared/CoverPage/CoverPage";
import MenuTemplate from "../../../Shared/MenuTemplate/MenuTemplate";

import Navbar from "../../../Shared/Navbar/Navbar";
import useMenus from "../../../hooks/useMenus";
const OurMenu = () => {
    const menus = useMenus()
    const todaysOffers = menus.filter(menu => menu.category=== "offered")
    const desserts = menus.filter(menu=> menu.category === "dessert")
    const pizzas = menus.filter(menu=> menu.category === "pizza")
    const salads = menus.filter(menu => menus.category === "salad")
    const soups = menus.filter(menu => menus.category === "soup")

    return(
        <div>
             <Navbar/>
             <CoverPage img="https://i.ibb.co/kDZgPtx/banner3.jpg" title="our menu" subTitle="would you like to try a dish?" textSize="text-6xl" height="600px"/>
             <MenuTemplate buttonText="ORDER YOUR FAVOURITE FOOD" menus={todaysOffers} heading="today's offer" subHeading="Don't miss"/>
        </div>
    )}
export default OurMenu;