import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogosItems from "./LogosItems";
import "./LogosItems.css";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useLogos from "../../../hooks/useLogos";
import { Link } from "react-router-dom";
import { useState } from "react";
import useScrollToTop from "../../../hooks/useScrollToTop ";
import { PropagateLoader } from "react-spinners";
// import useScrollToTop from "../../../hooks/useScrollToTop";

const LogosDesign = () => {
  useScrollToTop();
  const [logos, refetch, isLoading, isError, error] = useLogos();
  const [sortOption, setSortOption] = useState("default");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Function to sort logos based on the selected option
  const getSortedLogos = () => {
    const logosCopy = [...logos];
    if (sortOption === "lowToHigh") {
      return logosCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      return logosCopy.sort((a, b) => b.price - a.price);
    }
    return logosCopy; // Default sorting (no specific order)
  };

  const sortedLogos = getSortedLogos();

  return (
    <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] sm:mx-auto py-20 mx-5">
      <div>
        <h1 className="text-regular font-sf-bold text-atlantis-green">
          Logo Design
        </h1>
        <div className="dropdown py-2 pb-10">
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDropdown}
            className="font-sf-semibold flex items-center cursor-pointer"
          >
            <span className="font-sf-regular text-[#999999]">
              Sort By:&nbsp;
            </span>
            {sortOption === "lowToHigh"
              ? "Price: Low to High"
              : sortOption === "highToLow"
              ? "Price: High to Low"
              : "Default"}
            <FontAwesomeIcon icon={faChevronDown} className="pl-1 w-3" />
          </div>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-md z-[1] w-52 p-2 shadow-2xl gap-y-2"
            >
              <Link
                to="#"
                className="text-minimum font-sf-regular"
                onClick={() => {
                  setSortOption("default");
                  setDropdownOpen(false);
                }}
              >
                Default
              </Link>
              <Link
                to="#"
                className="text-minimum font-sf-regular"
                onClick={() => {
                  setSortOption("lowToHigh");
                  setDropdownOpen(false);
                }}
              >
                Price: Low to High
              </Link>
              <Link
                to="#"
                className="text-minimum font-sf-regular"
                onClick={() => {
                  setSortOption("highToLow");
                  setDropdownOpen(false);
                }}
              >
                Price: High to Low
              </Link>
            </ul>
          )}
        </div>
      </div>

      <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {isLoading ? (
          // Check if data is loading
          [...Array(20)].map((_, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className=" bg-gray-100 h-40 w-full rounded"></div>
              <div className="flex justify-between">
                <div className=" bg-gray-100 h-4 w-36 rounded"></div>
                <div className=" bg-gray-100 h-4 w-16 rounded"></div>
              </div>
            </div>
          ))
        ) : sortedLogos.length > 0 ? (
          sortedLogos.map((item) => <LogosItems key={item._id} item={item} />)
        ) : (
          <div className="2xl:col-span-5 xl:col-span-5 lg:col-span-4 md:col-span-3 sm:col-span-2 place-content-center text-center">
            <div className="my-8">
              <h1 className="text-regular font-sf-regular text-red-700">
                No logos found
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogosDesign;
