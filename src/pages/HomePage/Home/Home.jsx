import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import OrderOnline from "../OrderOnline/OrderOnline";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import Testimonials from "../Testimonials/Testimonials";




const Home = () => {
    return(
        <div>
            <Navbar/>
             <Banner/>
             <OrderOnline/>
             <FromOurMenu/>
             <FeaturedMenu/>
             <Testimonials/>
        </div>
    )}
export default Home;