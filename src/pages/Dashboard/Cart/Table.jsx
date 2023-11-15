import { AiFillDelete } from "react-icons/ai";
const Table = ({data, refetch}) => {
  return (
    <>
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="table">
          {/* head */}
          <thead className="text-white font-bold text-base bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           
            {
                data?.map(item=>  <tr key={item._id}>
                    <th>
                      <label>
                        <span>1</span>
                      </label>
                    </th>
                    <td>
                      <div className="mask rounded w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs"><AiFillDelete className="text-red-600" size={25}/></button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
