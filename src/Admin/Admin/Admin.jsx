import AdminBanner from "../AdminBanner/AdminNav";
import AdminDoc from "../AdminDoc/AdminDoc";
import AdminSearchBar from "../AdminProfile/AdminSearchBar/AdminSearchBar";

const Admin = () => {
  return (
    <>
      <div className="w-[90%] mx-auto flex">
        <div className="w-full">
          <AdminSearchBar />
          <AdminDoc />
        </div>
      </div>
    </>
  );
};

export default Admin;
