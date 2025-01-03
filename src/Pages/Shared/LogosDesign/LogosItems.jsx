import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LogosItems.css";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LogosItems = ({ item, isLoading }) => {
  const { title, price, category, imageUrls, status, _id } = item;

  return (
    <div className="logo-item-container">
      <Link to={`/product-page/${item._id}`} state={{ item }}>
        <div class="relative inline-block rounded-lg overflow-hidden">
          <img
            src={imageUrls[0]}
            alt={title}
            className="w-full h-auto rounded-lg border border-dark-green "
          />
          {item.isFeatured === "featured" && (
            <div class="absolute top-14 -left-7 w-[120px] text-center bg-atlantis-green text-white px-2  text-[11px] font-sf-regular rotate-[-45deg] transform origin-top-left">
              Featured
            </div>
          )}
          {status === "Purchased" ? (
            <div class="absolute -right-[138px] top-[66px] w-[120px] text-center bg-dark-green text-white px-2  text-[11px] font-sf-regular rotate-[-135deg] transform origin-top-left">
              <h2 className="rotate-180"> Sold</h2>
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>

      {/* <div className="tooltip">
        <div className="icon-wrapper">
          <FontAwesomeIcon
            className="tooltip-image cursor-pointer"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="tooltip-text cursor-pointer">
          <img src={imageUrls[1]} alt={title} />
        </div>
      </div> */}

      <div className="flex items-baseline justify-between">
        <h1 className="text-minimum font-dark-green font-sf-medium -top-4 relative pt-4">
          {title}
        </h1>
        <h1 className="text-[18px] font-dark-green font-sf-bold -top-4 relative">
          ${price}
        </h1>
      </div>
    </div>
  );
};

export default LogosItems;
