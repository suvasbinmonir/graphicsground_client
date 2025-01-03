import { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateUserInfo = () => {
  const { loggedInUser, refetch } = useUsers();
  const axiosSecure = useAxiosSecure();
  const [userImg, setUserImg] = useState(null);
  const [formData, setFormData] = useState({
    name: loggedInUser?.name || "",
    number: loggedInUser?.number || "",
    address: loggedInUser?.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = new FormData();
    updatedData.append("name", formData.name);
    updatedData.append("number", formData.number);
    updatedData.append("address", formData.address);
    if (userImg) {
      updatedData.append("image", userImg);
    }

    try {
      const response = await axiosSecure.post("/update-user", updatedData);
      if (response.status === 200) {
        refetch();
        alert("User information updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <div className="my-24">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-dark-green w-72 h-12 rounded pl-2 capitalize"
          />
          <input
            type="email"
            name="email"
            value={loggedInUser?.email || ""}
            readOnly
            className="border border-dark-green w-72 h-12 rounded pl-2"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="border border-dark-green w-72 h-12 rounded pl-2"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border border-dark-green w-72 h-12 rounded pl-2"
          />
        </div>
        <div className="relative border border-dark-green h-40 rounded p-2 w-full">
          <input
            type="file"
            onChange={(e) => setUserImg(e.target.files[0])}
            className="hidden"
            id="customImageUpload"
          />
          <label
            htmlFor="customImageUpload"
            className="flex flex-col items-center justify-center h-full cursor-pointer text-dark-green"
          >
            <FaRegImage className="text-3xl text-yellow-600" />
            <p className="text-regular-lite font-sf-regular pt-2">
              Upload your picture
            </p>
            {userImg && (
              <p className="mt-2 text-sm text-gray-500">{userImg.name}</p>
            )}
          </label>
          {userImg && (
            <button
              onClick={() => setUserImg(null)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-atlantis-green uppercase font-sf-semibold text-regular bg-dark-green px-10 p-1 rounded-lg"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserInfo;
