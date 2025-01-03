import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaCloudDownloadAlt, FaRegUserCircle, FaBars } from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdOutlinePayments,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import Swal from "sweetalert2";

const ProfileNav = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const handleLogOut = () => {
    Swal.fire({
      title: "Do you want to Log Out?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002626",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have been logged out successfully.",
              icon: "success",
              confirmButtonColor: "#002626",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "An error occurred during logout. Please try again.",
              icon: "error",
            });
          });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "You are still logged in.",
          icon: "info",
          confirmButtonColor: "#002626",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <>
      {/* Mobile Navbar Toggle Button */}

      <button
        className="block md:hidden fixed top-4 right-4 z-50 text-dark-green mt-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="w-8 h-8" />
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed sm:static top-0 left-0 h-screen w-60 bg-white border border-dark-green shadow-md overflow-y-auto flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40 md:translate-x-0`}
      >
        <div className="py-10 flex flex-col items-center">
          <div>
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-14 h-14 rounded-full"
              />
            ) : (
              <FaRegUserCircle className="w-16 h-16 text-gray-500" />
            )}
          </div>
          <h1 className="text-dark-green text-2xl font-bold capitalize text-center mt-4">
            {user.displayName}
          </h1>
          <button
            onClick={handleLogOut}
            className="text-white bg-dark-green py-2 px-14 mt-4 rounded-lg hover:bg-[#173f19]"
          >
            Log Out
          </button>
        </div>
        <div className="flex flex-col pl-4 space-y-4 mt-4">
          <Link
            className="text-dark-green text-regular-lite font-semibold flex items-center gap-2"
            to={"/profile/user"}
          >
            <MdOutlineDashboard />
            Dashboard
          </Link>
          <Link
            className="text-dark-green text-regular-lite font-semibold flex items-center gap-2"
            to={"/profile/subscription"}
          >
            <MdOutlineSubscriptions />
            Subscription
          </Link>
          <Link
            className="text-dark-green text-regular-lite font-semibold flex items-center gap-2"
            to={"/profile/support"}
          >
            <RiRobot2Line />
            Support
          </Link>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default ProfileNav;
