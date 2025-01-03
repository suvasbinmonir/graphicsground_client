import { useContext } from "react";
import "./NavBar.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/authProvider";
import { FaRegUser } from "react-icons/fa";
import LogoSearch from "../../../Oparetion/Oparetion";
import useAdmin from "../../../hooks/useAdmin";
const NavBar = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const navOption = (
    <>
      <div className="flex 2xl:gap-8 xl:gap-5 lg:gap-3 flex-col sm:flex-row gap-4 ">
        <Link className="font-sf-regular text-minimum" to="/logos">
          Logos
        </Link>
        <Link className="font-sf-regular text-minimum" to="/sold-items">
          <a>Sold Items</a>
        </Link>
        <Link className="font-sf-regular text-minimum" to="/testimonial">
          <a>Testimonials</a>
        </Link>
        <Link to={"/case-study"} className="font-sf-regular text-minimum">
          <a>Case Study</a>
        </Link>
        {isAdmin && user && (
          <Link to="/admin" className="font-sf-regular text-minimum">
            Admin Panel
          </Link>
        )}
        <div className="sm:hidden">
          {!user ? (
            <p className="font-sf-regular text-minimum">
              <Link to="/log-in">Log In</Link>
            </p>
          ) : loading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <p className="font-sf-regular text-minimum">
              <Link to={"/profile/user"}>
                <FaRegUser />
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="flex justify-between sm:justify-center bg-dark-green h-[80px] w-svw fixed z-10 ">
      <div className="navbar text-white 2xl:w-[1400px] xl:w-[90%] lg:w-[90%]">
        <div className="navbar-start 2xl:w-[85%]">
          <div className="dropdown flex justify-between ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  text-white bg-dark-green rounded z-[1] mt-10 ml-5 w-52 p-2 pb-8  shadow "
            >
              {navOption}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <img
                src={logo}
                className="2xl:w-[209px] xl:w-[200px] lg:w-[180px] 2xl:pr-0 xl:pr-5 lg:pr-3"
                alt="graphics ground logo"
              />
            </Link>
            <div className=" lg:flex hidden ">
              <ul className="menu menu-horizontal px-1 2xl:pl-20 lg:pl-0 ">
                {navOption}
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-end flex gap-x-4  ">
          <Link
            to="/shop"
            className="border border-atlantis-green text-dark-green bg-atlantis-green rounded-full px-3 font-sf-bold text-minimum 
  transition-all duration-300 hover:bg-gradient-to-r hover:from-atlantis-green hover:to-lime-300"
          >
            Custom Shop
          </Link>
          <div className="hidden sm:block">
            <LogoSearch />
          </div>
          <div className="hidden sm:block">
            {!user ? (
              <p className="font-sf-regular text-minimum">
                <Link to="/log-in">Log In</Link>
              </p>
            ) : loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <p className="font-sf-regular text-minimum">
                <Link to={"/profile/user"}>
                  <FaRegUser />
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
