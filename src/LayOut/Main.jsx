import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import useLogos from "../hooks/useLogos";

const Main = () => {
  const [logo] = useLogos();
  const location = useLocation();

  // If `logos` has data, map through and access individual items
  const itemId = logo.map((it) => {
    const item = it;
    return item;
  });

  // Add a check to ensure `itemId` is not empty before accessing `_id` and `name`
  const firstItem = itemId[0]; // assuming you want the first item for checking the path

  // Handle the case where `logos` might be empty
  const noHeaderFooter = firstItem
    ? location.pathname.includes(
        `/product-page/${firstItem._id}/${firstItem.name}`
      )
    : false;

  // console.log("Does the location match the path: ", noHeaderFooter);
  return (
    <div>
      {noHeaderFooter || <NavBar />}
      <br />
      <br />
      <br />
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
