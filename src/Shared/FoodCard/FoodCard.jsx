const FoodCard = ({menu}) => {
    return(
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={menu.image} alt="Shoes" /></figure>
        <div className="card-body text-center">
          <h2 className="text-xl font-bold">{menu.name}</h2>
          <p>{menu.recipe}</p>
          <div className="card-actions justify-center">
          <button className="btn text-[#D99904] btn-outline border-x-0 border-t-0 border-b-4 hover:bg-[#0c0a05] hover:text-[#D99904]">
            Buy now
          </button>
          </div>
        </div>
      </div>
    )}
export default FoodCard;