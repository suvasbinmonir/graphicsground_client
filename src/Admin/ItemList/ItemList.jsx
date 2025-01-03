import Swal from "sweetalert2";
import useLogos from "../../hooks/useLogos";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdFeaturedPlayList } from "react-icons/md";

const ItemList = () => {
  const [logos, refetch] = useLogos();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log(id);
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
        axiosSecure.delete(`/logos/${id}`).then((res) => {
          console.log(res);
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

  const handleFeatured = async (id, isChecked) => {
    try {
      // Determine the new `isFeatured` value based on the checkbox state
      const newStatus = isChecked ? "featured" : "unFeatured";

      const response = await axiosSecure.patch(`/logos/${id}`, {
        isFeatured: newStatus,
      });

      if (response?.data?.message) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: isChecked
            ? "Item marked as Featured!"
            : "Item marked as Unfeatured!",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error updating featured status:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update featured status. Please try again.",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="min-h-screen mx-10 my-10">
      <div className="flex justify-between  mx-10 mt-4 bg-white">
        <input
          type="search"
          placeholder="Search"
          className="bg-white border h-16 pl-3 w-[500px] rounded-md focus:outline-none border-dark-green text-regular-lite"
        />{" "}
        <button className="border bg-dark-green text-white text-regular-lite font-sf-regular px-12 py-4 rounded-md">
          Totla {logos.length}
        </button>
      </div>
      <div className="overflow-x-auto w-[95%] mx-auto border border-dark-green p-10 m-10 bg-white">
        <div className="  mx-auto  ">
          <div className="flex items-center w-[100%] border border-dark-green rounded ">
            <div className=" py-2 w-[15.5%]   border-dark-green pl-2 text-sm font-sf-regular  ">
              {" "}
              Logo
            </div>
            <div className=" py-2 w-[15.5%]  border-l border-dark-green pl-2 text-sm font-sf-regular  ">
              Logo Id{" "}
            </div>
            <div className=" py-2 w-[20.5%]  border-l border-dark-green pl-2 text-sm font-sf-regular   ">
              Logo Title{" "}
            </div>
            <div className=" py-2 w-[7%]  border-l border-dark-green pl-2 text-sm font-sf-regular   ">
              Price{" "}
            </div>
            <div className=" py-2 w-[17%]  border-l border-dark-green pl-2 text-sm font-sf-regular  ">
              Categroy{" "}
            </div>
            <div className=" py-2 w-[7%]  border-l border-dark-green pl-2 text-sm font-sf-regular  ">
              Delete?
            </div>
            <div className=" py-2 w-[10%]  border-l border-dark-green pl-2 text-sm font-sf-regular  ">
              Make Featured
            </div>
            <div className=" py-2 w-[7%]  border-l border-dark-green pl-2 text-sm font-sf-regular   ">
              Action{" "}
            </div>
          </div>
          {logos.map((item) => (
            <div key={item._id} className="w-[100%]">
              <div className="flex items-center w-[100%]  my-2 gap-2 border border-dark-green ">
                <div className="  pl-2 w-[15.5%]   ">
                  <img
                    src={item.imageUrls[1]}
                    className="  rounded-lg"
                    width={"70px"}
                    alt=""
                  />
                </div>
                <h1 className="  pl-2 w-[15.5%]  text-atlantis-green font-sf-regular text-minimum   ">
                  {item._id}
                </h1>
                <h1 className="  pl-2 w-[20.5%]  text-dark-green font-sf-regular text-minimum   ">
                  {item.title}
                </h1>
                <h1 className="  pl-2 w-[7%]  text-dark-green font-sf-regular text-minimum   ">
                  {item.price}
                </h1>
                <h1 className="  pl-2 w-[17%]  text-dark-green font-sf-regular text-minimum   ">
                  {item.category}
                </h1>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="  pl-5 w-[7%] "
                >
                  {<RiDeleteBin5Line className="text-2xl" />}
                </button>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => handleFeatured(item._id, e.target.checked)}
                  checked={item.isFeatured === "featured"} // Pre-check if it's featured
                />

                <button className="pl-5 w-[7%] ">
                  <BsThreeDotsVertical />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
