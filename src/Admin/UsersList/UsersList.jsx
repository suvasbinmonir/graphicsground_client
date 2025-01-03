import Swal from "sweetalert2";
import useLogos from "../../hooks/useLogos";
import useUsers from "../../hooks/useUsers";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UsersList = () => {
  //   const { users, refetch } = useUsers();

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          // console.log(res.data.deletedCount);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-[95%] mx-auto">
      <div className="border border-dark-green rounded-xl my-10">
        {users.map((user) => (
          <div key={user._id}>
            <div className="flex items-center border-b border-dark-green my-5 ">
              <div className="w-[90%] grid grid-cols-5 mx-auto">
                <h1 className=" text-dark-green font-sf-regular text-minimum ">
                  {user.name}
                </h1>
                <h1 className=" text-dark-green font-sf-regular text-minimum  ">
                  {user.email}
                </h1>
                <h1 className=" text-dark-green font-sf-regular text-minimum  ">
                  {user.number}
                </h1>
                <div className="mx-auto w-32 mb-5">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className=" text-white font-sf-regular text-minimum border rounded-3xl bg-dark-green  font-semibold w-[150px] py-2"
                  >
                    Delete
                  </button>
                </div>

                {/* MAKING USER AS A ADMIN ROLE  */}
                {/* {user.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className=" text-white font-sf-regular text-minimum border rounded-3xl bg-dark-green  font-semibold w-[200px] h-11 py-0"
                  >
                    Make as Admin
                  </button>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
