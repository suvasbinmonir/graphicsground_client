import { Link } from "react-router-dom";
import './CustomShopTitle.css'

const CustomShopTitle = ({ subHeading, CustomShopLink }) => {
  return (
    <div className="grid place-items-center py-6 sm:py-16">
    <h1
      className="font-sf-bold 2xl:text-sub-header-2 xl:text-sub-header-1 lg:text-tab-sub-header-1 text-regular-lite fade-in"
    >
      {subHeading}
    </h1>
    <Link
      to={"/shop"}
      className="border rounded-full bg-atlantis-green text-dark-green px-6 py-1 2xl:text-regular xl:text-regular lg:text-tab-regular font-sf-bold mt-3 scale-up-on-hover"
    >
      {CustomShopLink}
    </Link>
  </div>
  
  );
};

export default CustomShopTitle;
