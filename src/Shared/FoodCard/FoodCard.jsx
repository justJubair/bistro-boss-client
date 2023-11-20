import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";
const FoodCard = ({ menu }) => {
  const {name, image, price, recipe, _id} = menu
  const {user} = useAuth()
  const axios = useAxios()
  const [, refetch] = useCart()
  const userEmail = user?.email
  const handleCartPost = ()=>{
    const item = {name, image, price, recipe, userEmail, menuId: _id}
    axios.post("/carts", item)
    .then(result=>{
      if(result.data.insertedId){
        toast.success(`${menu?.name} has been added`)
        refetch()
      }
    })
  }
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={menu.image} alt="Shoes" />
        <p className="absolute top-2 right-5 bg-black text-white px-4 py-2 rounded">
          ${menu.price}
        </p>
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-bold">{menu.name}</h2>
        <p>{menu.recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={handleCartPost} className="btn text-[#D99904] btn-outline border-x-0 border-t-0 border-b-4 hover:bg-[#0c0a05] hover:text-[#D99904]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  menu: PropTypes.object,
};
export default FoodCard;
