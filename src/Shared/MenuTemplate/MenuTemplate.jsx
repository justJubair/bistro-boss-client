import { Link } from "react-router-dom";
import MenuCard from "../../components/MenuCard/MenuCard";
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import PropTypes from "prop-types"
const MenuTemplate = ({menus,buttonText, heading, subHeading, marginTop, title}) => {

    return(
       <Container>
         <div >
           {
            heading &&  <SectionTitle heading={heading} subHeading={subHeading}  />
           }
             <div className={`${marginTop ? marginTop : "mt-10"} grid grid-cols-1 gap-4 md:grid-cols-2`}>
                {
                    menus?.map(menu=> <MenuCard key={menu._id} menu={menu}/>)
                }
            </div>
            <div className="text-center mt-10 mb-16">
            <Link to={`/ourKitchen/${title}`}>
            <button className="btn btn-outline border-x-0 border-t-0 border-b-4 hover:bg-[#D99904]">{buttonText ? buttonText : "ORDER YOUR FAVOURITE FOOD"}</button></Link>
            </div>      
        </div>
       </Container>
    )}


MenuTemplate.propTypes = {
    menus:PropTypes.array,
    buttonText:PropTypes.string,
    heading:PropTypes.string,
    subHeading:PropTypes.string,
    marginTop:PropTypes.string,
    title:PropTypes.string,
    
}    
export default MenuTemplate;