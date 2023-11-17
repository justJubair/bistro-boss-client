const ManageTabel = () => {
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
          
            <tr>
              <td>
               1
              </td>
              <td>
               
                  <div className="avatar">
                    <div className="rounded w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                 
              
              </td>
              <td>
                Zemlak, Daniel and Leannon
                
              </td>
              <td>Purple</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageTabel;
