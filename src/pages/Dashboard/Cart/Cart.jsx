import Table from "../../../Shared/Table/Table";
import useCart from "../../../hooks/useCart";


const Cart = () => {
  const [data, refetch] = useCart();
  const totalPrice = data?.reduce((total, item)=> total+item?.price ,0)

  return (  
    <div>
      <div className="uppercase flex items-center justify-between text-xl font-bold mt-16 mb-4">
        <p>total orders: {data?.length}</p>
        <p>tolal price: ${totalPrice}</p>
        <button className="btn">pay</button>
      </div>
      <Table data={data} refetch={refetch}/>
    </div>
  );
};

export default Cart;