import { Link } from "react-router-dom";
import "./CustomSinglePackage.css";

const CustomSinglePackage = ({ item }) => {
  const { title, img, details, price } = item;

  // Define the function to format the title for the URL
  const formatTitleForUrl = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-"); // Converts spaces to hyphens
  };

  return (
    <Link
      to={`/shop/${formatTitleForUrl(title)}`}
      className="package-card cursor-pointer w-[300px] h-[380px] mt-3 rounded-xl  transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-slide-up"
    >
      <img className="rounded-t-xl h-[200px] w-full " src={img} alt={title} />
      <div className="px-4">
        <h1 className="2xl:text-regular xl:text-regular lg:text-regular-lite font-sf-bold text-dark-green pt-3 transition-colors duration-300 hover:text-atlantis-green">
          {title}
        </h1>
        <h1 className="2xl:text-tab-minimum lg:text-tab-minimum font-sf-regular text-dark-green py-2 transition-colors duration-300 hover:text-atlantis-green">
          {details}
        </h1>
        <h1 className="2xl:text-sub-header-2 xl:text-sub-header-2 lg:text-tab-sub-header-1 text-dark-green font-sf-bold pb-2 transition-colors duration-300 hover:text-atlantis-green">
          from ${price}
        </h1>
      </div>
    </Link>
  );
};

export default CustomSinglePackage;
