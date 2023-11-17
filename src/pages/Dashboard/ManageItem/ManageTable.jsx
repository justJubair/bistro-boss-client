/* eslint-disable react/prop-types */
const ManageTabel = ({ menus, refetch }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu, idx) => (
              <tr key={menu._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="rounded w-12 h-12">
                      <img
                        src={menu?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{menu?.name}</td>
                <td>{menu?.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">update</button>
                </td>
                <td>
                  <button className="btn btn-ghost text-red-500 btn-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageTabel;
