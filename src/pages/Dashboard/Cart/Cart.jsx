import { Link } from "react-router-dom";
import Table from "../../../Shared/Table/Table";
import useCart from "../../../hooks/useCart";


const Cart = () => {
  const [data, refetch, isLoading] = useCart();
  if(isLoading){
    return <p>loading...</p>
  }
  const totalPrice = data?.reduce((total, item)=> total+item?.price ,0)

  return (  
    <div>
      <div className="uppercase flex items-center justify-between text-xl font-bold mt-16 mb-4">
        <p>total orders: {data?.length}</p>
        <p>tolal price: ${totalPrice}</p>
        {
          data.length ?  <Link  to="/dashboard/payment"><button disabled={!data?.length} className="btn">pay</button></Link> : <button disabled className="btn">pay</button>
        }
      
      </div>
      <Table data={data} refetch={refetch}/>
    </div>
  );
};

export default Cart;