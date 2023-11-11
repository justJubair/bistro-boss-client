import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import OrderOnline from "../OrderOnline/OrderOnline";
import OurMenu from "../OurMenu/OurMenu";




const Home = () => {
    return(
        <div>
            <Navbar/>
             <Banner/>
             <OrderOnline/>
             <OurMenu/>
             <FeaturedMenu/>
        </div>
    )}
export default Home;