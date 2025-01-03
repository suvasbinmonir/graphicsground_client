import React, { useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUsers from "./../../hooks/useUsers";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";

const Users = () => {
  const { users, refetch } = useUsers();
  const { createUser, user, loading } = useAuth();

  const userWithRole = users.filter(
    (item) => item.role === "admin" || item.role === "product management"
  );

  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create the account using email and password
      // await createUser(formData.email, formData.password);

      // Step 2: Once the user is created, send the form data to the server
      await axiosSecure.post("/users", {
        name: formData.name,
        role: formData.role,
        email: formData.email,
      });

      // Success message for user creation and data submission
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Admin created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      // Optionally, clear the form fields
      setFormData({
        name: "",
        role: "",
        email: "",
        password: "",
      });

      // Refetch user data if necessary
      refetch();
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Admin Already exists",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "There was an error creating the admin.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
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
    <div className="2xl:w-[1400px] xl:w-[100%] mx-auto">
      <h1 className="text-regular font-sf-semibold text-dark-green uppercase pl-2">
        Users and Admins
      </h1>
      <div className=" max-w-full min-h-screen rounded-xl p-7">
        <div className="border rounded-xl border-dark-green p-10">
          <h1 className="text-regular text-dark-green font-sf-regular">
            Make an admin
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-10">
              <label className="w-[300px] flex flex-col mt-4">
                <span className="text-sm">Full Name*</span>
                <input
                  className="bg-white border px-2 py-3 rounded border-black"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="w-[300px] flex flex-col mt-4">
                <label htmlFor="role" className="text-sm">
                  Select Role*
                </label>
                <select
                  id="role"
                  name="role"
                  className="border p-2 rounded bg-white"
                  onChange={handleChange}
                >
                  <option value="">Select a role</option>
                  <option value="admin">Admin</option>
                  <option value="product management">Product Management</option>
                </select>
              </label>
            </div>
            <div className="flex flex-row gap-10">
              <label className="w-[300px] flex flex-col mt-4">
                <span className="text-dark-green text-sm">
                  Enter Email Address*
                </span>
                <input
                  className="bg-white border px-2 py-3 rounded border-black"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="w-[300px] flex flex-col mt-4">
                <span className="text-dark-green text-sm">
                  Enter A Password*
                </span>
                <input
                  className="bg-white border px-2 py-3 rounded border-black"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  required
                />
                <span className="text-green-400 text-sm">
                  Password Required: Minimum 8 characters
                </span>
              </label>
            </div>
            <div className="flex justify-end mr-[19px] mt-4">
              <button className="bg-dark-green text-white rounded px-4 py-2">
                Create Admin
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <div className="border border-dark-green rounded-xl p-10">
          <div className="flex justify-between items-center">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search"
              className="bg-white border border-dark-green pl-2 w-96 py-2 rounded-lg"
            />
            <button className="px-6 py-2 rounded-lg border border-dark-green">
              Total 0
            </button>
          </div>
          <div className=" py-10 ">
            <div className="flex border-y py-3">
              <div className="capitalize text-dark-green font-sf-bold text-regular-lite w-[30%]">
                user
              </div>
              <div className="capitalize text-dark-green font-sf-bold text-regular-lite w-[30%]">
                email
              </div>
              <div className="capitalize text-dark-green font-sf-bold text-regular-lite w-[30%]">
                role
              </div>
              <div className="capitalize text-dark-green font-sf-bold text-regular-lite w-[10%]">
                action
              </div>
            </div>
            {userWithRole.map((singleUser) => (
              <div key={singleUser._id}>
                <div className="flex border-b gap-y-10 items-center">
                  <div className="flex flex-col w-[30%] pt-5 py-2">
                    <span className="text-dark-green font-sf-semibold text-regular-lite">
                      {" "}
                      {singleUser.displayName
                        ? singleUser.displayName
                        : "No Name"}
                    </span>
                    <span className="text-sm text-dark-green ">
                      {" "}
                      {singleUser._id}
                    </span>
                  </div>
                  <div className="text-dark-green w-[30%] pt-5 py-2">
                    {singleUser.email}
                  </div>
                  <div className="text-dark-green font-sf-semibold w-[30%] pt-5 py-2 ">
                    {singleUser.role}
                  </div>
                  <button
                    className=" w-[10%] pt-5 py-2  "
                    onClick={() => handleDelete(singleUser._id)}
                  >
                    {<RiDeleteBin5Line />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
