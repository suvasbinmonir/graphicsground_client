import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import ProfileNav from "../UserProfile/ProfileNav/ProfileNav";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  return (
    <div className="bg-slate-200 ">
      <Helmet>
        <title>GraphicsGround | User</title>
      </Helmet>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="2xl:w-[1400px] w-[100vw] mx-auto min-h-svh">
        <div className="flex gap-4 ">
          <div className="">
            <div className="mt-10">
              <ProfileNav />
            </div>
          </div>
          <div className="w-full min-h-screen mb-10 mt-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
