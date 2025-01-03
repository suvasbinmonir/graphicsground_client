import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../Admin/AdminBanner/AdminNav";
import AdminSearchBar from "../Admin/AdminProfile/AdminSearchBar/AdminSearchBar";
import AdminDoc from "../Admin/AdminDoc/AdminDoc";
import Admin from "./../Admin/Admin/Admin";

const Dashboard = () => {
  return (
    <div className="flex bg-white">
      <div className="fixed">
      <AdminNav />
      </div>

      <div className="flex-1 ml-80 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
