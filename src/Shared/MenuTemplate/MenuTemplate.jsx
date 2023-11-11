import MenuCard from "../../pages/HomePage/FromOurMenu/MenuCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const MenuTemplate = ({menus,buttonText, heading, subHeading}) => {

    return(
        <div>
           {
            heading &&  <SectionTitle heading={heading} subHeading={subHeading}  />
           }
             <div className="max-w-screen-xl mt-10 px-4 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
                {
                    menus?.map(menu=> <MenuCard key={menu._id} menu={menu}/>)
                }
            </div>
            <div className="text-center my-10">
            <button className="btn btn-outline border-x-0 border-t-0 border-b-4 hover:bg-[#D99904]">{buttonText}</button>
            </div>      
        </div>
    )}
export default MenuTemplate;