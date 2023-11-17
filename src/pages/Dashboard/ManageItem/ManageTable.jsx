import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

/* eslint-disable react/prop-types */
const ManageTabel = ({ menus, refetch }) => {
  const axiosSecure = useAxiosSecure()
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  // DELETE items from cart
  const handleDelete = (_id) => {
   
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/menus/${_id}`).then((result) => {
            if (result.data.deletedCount) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch()
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

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
                  <button onClick={()=> handleDelete(menu._id)} className="btn btn-ghost text-red-500 btn-xs">
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
