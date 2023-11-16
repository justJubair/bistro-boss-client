/* eslint-disable react/prop-types */
import { AiFillDelete, AiOutlineDelete, AiOutlineUsergroupAdd } from "react-icons/ai";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const Table = ({ data, refetch, allUsers }) => {
  const axios = useAxios();
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
          axios.delete(`/carts/${_id}`).then((result) => {
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

  // DELETE users from database
  const handleUserDelete = (_id)=>{
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
        axiosSecure.delete(`/users/${_id}`).then((result) => {
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
  }

  // make an user admin 
  const handleRole = (_id, name)=>{
    const usersRole = {role: "admin"}
    axiosSecure.patch(`/users/${_id}`, usersRole)
    .then(res=>{
      if(res.data.modifiedCount > 0){
        toast.success(`${name} is now admin`)
        refetch()
      }
    })
  }
  return (
    <>
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="table">
          {/* head */}
          <thead className="text-white font-bold text-base bg-[#D1A054]">
              {
                allUsers ?   <tr>
                <th></th>
               
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr> : 
              <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
                
              }
           
          </thead>
          <tbody>
            {/* row 1 */}

            {data?.map((item, idx) => (
              <tr key={item._id}>
                <th>
                  <label>
                    <span>{idx+1}</span>
                  </label>
                </th>
                {
                  allUsers ? <td>{item.name}</td> :  <td>
                  <div className="mask rounded w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </td>
                }
               
               {
                allUsers ? <td>{item.email}</td> : <td>{item.name}</td>         
              }
                {
                  allUsers ? <td>{item?.role ? "Admin" : <button onClick={()=> handleRole(item._id, item?.name)} className="btn btn-sm"><AiOutlineUsergroupAdd size={25}/></button>}</td> :  <td>{item.price}</td>
                }
               
                <th>
                  {
                    allUsers ?  <button
                    onClick={() => handleUserDelete(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <AiOutlineDelete className="text-red-600" size={25} />
                  </button> :  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <AiFillDelete className="text-red-600" size={25} />
                  </button>
                  }
                 
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
