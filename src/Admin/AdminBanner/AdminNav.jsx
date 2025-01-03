import { Link } from "react-router-dom";
import img from "/logolight.png";
import adminImg from "./admin.png";
import { MdAdminPanelSettings, MdEventNote } from "react-icons/md";
import { FaListCheck, FaRegUser } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import { PiHandHeartDuotone, PiNotePencilDuotone } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import useAdmin from "./../../hooks/useAdmin";

const AdminNav = () => {
  const [isAdmin] = useAdmin();
  return (
    <>
      <div className="w-80 min-h-screen py-14 mx-auto ml-10 border-r bg-white">
        <div className=" w-32 ml-16 flex flex-col items-center ">
          {/* <br /> */}
          {isAdmin ? (
            <Link to="/admin">
              <img
                className="border-dark-green p-4 rounded-full border-2 "
                src={adminImg}
                alt=""
              />
            </Link>
          ) : (
            ""
          )}
        </div>
        {/* <br /> */}
        <br />

        <Link to="/">
          <img src={img} width={"230px"} alt="graphic ground logo" />
        </Link>
        <div className="pl-4">
          <h1 className="text-2xl font-sf-bold text-dark-green text-center pt-6 flex items-center ">
            <MdAdminPanelSettings className="text-3xl" /> Dashboard
          </h1>
          {/* NAV OPTION   */}
          <nav className="flex flex-col items-start">
            <details className="dropdown bg-white">
              <summary className="btn  bg-white border-none text-dark-green text-xl p-0 m-0 hover:bg-white flex items-center mt-6 shadow-none">
                <MdEventNote /> Order
              </summary>
              <ul className="menu  text-dark-green bg-white ">
                <Link> Home</Link>
                <Link> Home</Link>
              </ul>
            </details>
            <details className="dropdown bg-white">
              <summary className="btn  bg-white border-none text-dark-green text-xl p-0 m-0 hover:bg-white flex items-center shadow-none ">
                <FaListCheck /> Item
              </summary>
              <ul className="menu  text-dark-green bg-white ">
                <Link
                  className="text-md font-sf-semibold text-dark-green pt-2"
                  to={"/admin/item-list"}
                >
                  Item List
                </Link>
                <Link
                  className="text-md font-sf-semibold text-dark-green pt-2"
                  to={"/admin/add-item"}
                >
                  Add Item
                </Link>
              </ul>
            </details>
            {/* <details className="dropdown bg-white">
              <summary className="btn  bg-white border-none text-dark-green text-xl p-0 m-0 hover:bg-white flex items-center shadow-none ">
                <TbUsersGroup /> Clients
              </summary>
              <ul className="menu  text-dark-green bg-white ">
                <Link
                  className="text-md font-sf-semibold text-dark-green pt-2"
                  to={"/admin/client-list"}
                >
                  Client List
                </Link>
                <Link
                  className="text-md font-sf-semibold text-dark-green pt-2"
                  to={"/admin/clients"}
                >
                  All Clients
                </Link>
              </ul>
            </details> */}
            <Link
              className=" bg-white border-none text-dark-green text-xl p-0 m-0 hover:bg-white flex items-center font-sf-semibold my-3"
              to={"/admin/clients-list"}
            >
              <TbUsersGroup /> Clients
            </Link>
            <Link
              className=" bg-white border-none text-dark-green text-xl p-0 m-0 hover:bg-white flex items-center font-sf-semibold mb-1"
              to={"/admin/users"}
            >
              <FaRegUser className="text-black  font-bold pr-1 text-regular-lite " />
              Users
            </Link>
            {
              <Link to="/admin/requirement">
                <details className="dropdown bg-white shadow-none">
                  <summary className="btn  bg-white border-none text-dark-green text-xl p-0 m-0 hover:bg-white flex items-center  shadow-none ">
                    <PiHandHeartDuotone /> Requerments
                  </summary>
                  {/* <ul className="menu  text-dark-green bg-white ">
                <Link to={"/"}> Home</Link>
                <Link to={"/"}> Home</Link>
              </ul> */}
                </details>
              </Link>
            }
            <Link to="/admin/case-study">
              <details className="dropdown bg-white">
                <summary className="btn  bg-white border-none text-dark-green text-xl p-0 m-0 hover:bg-white flex items-center shadow-none">
                  <PiNotePencilDuotone /> Case Study
                </summary>
              </details>
            </Link>
            <details className="dropdown bg-white">
              <summary className="btn  bg-white border-none text-dark-green text-xl p-0 m-0 hover:bg-white flex items-center ">
                <PiNotePencilDuotone /> Blog
              </summary>
              {/* <ul className="menu  text-dark-green bg-white ">
                <Link to={"/"}> Home</Link>
                <Link to={"/admin/show-case"}> sala</Link>
              </ul> */}
            </details>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
