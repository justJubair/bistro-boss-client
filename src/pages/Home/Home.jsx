import MenuTemplate from "../../Shared/MenuTemplate/MenuTemplate";
import Banner from "../../components/Banner/Banner";
import FeaturedMenu from "../../components/FeaturedMenu/FeaturedMenu";
import OrderOnline from "../../components/OrderOnline/OrderOnline";
import Testimonials from "../../components/Testimonials/Testimonials";
import useMenus from "../../hooks/useMenus";








const Home = () => {
    const menus = useMenus()
    const popularMenu = menus.filter(menu=> menu.category === "popular")
    return(
        <div>
             <Banner/>
             <OrderOnline/>
             {/* <FromOurMenu/> */}
        <MenuTemplate menus={popularMenu} heading="from our menu" subHeading="Check it out" buttonText="view full menu"/>
             <FeaturedMenu/>
             <Testimonials/>
        </div>
    )}
export default Home;