import PropTypes from "prop-types"
const MenuCard = ({menu}) => {
    return(
        <div className="flex gap-4">
            <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[100px]" src={menu.image} alt={menu.name} />
            <div>
                <h4 className="uppercase">{menu.name}-------------</h4>
                <p className="text-xs text-slate-500">{menu.recipe}</p>
            </div>
            <p className="text-[#D99904]">${menu.price}</p>
        </div>
    )}
MenuCard.propTypes = {
    menu:PropTypes.object,
}    
export default MenuCard;