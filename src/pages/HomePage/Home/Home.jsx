import MenuTemplate from "../../../Shared/MenuTemplate/MenuTemplate";
import Navbar from "../../../Shared/Navbar/Navbar";
import useMenus from "../../../hooks/useMenus";
import Banner from "../Banner/Banner";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import OrderOnline from "../OrderOnline/OrderOnline";
// import FromOurMenu from "../FromOurMenu/FromOurMenu";
import Testimonials from "../Testimonials/Testimonials";




const Home = () => {
    const menus = useMenus()
    const popularMenu = menus.filter(menu=> menu.category === "popular")
    return(
        <div>
            <Navbar/>
             <Banner/>
             <OrderOnline/>
             {/* <FromOurMenu/> */}
        <MenuTemplate menus={popularMenu} heading="from our menu" subHeading="Check it out" buttonText="view full menu"/>
             <FeaturedMenu/>
             <Testimonials/>
        </div>
    )}
export default Home;