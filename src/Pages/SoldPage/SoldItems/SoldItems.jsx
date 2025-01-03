import { useState } from "react";
import useLogos from "../../../hooks/useLogos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SoldItems = () => {
  const [logos, refetch] = useLogos();
  const [sortOption, setSortOption] = useState("default");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const soldItems = logos.filter((logo) => logo.status === "Purchased");
  const getSortedLogos = () => {
    const logosCopy = [...soldItems];
    if (sortOption === "lowToHigh") {
      return logosCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      return logosCopy.sort((a, b) => b.price - a.price);
    }
    return logosCopy; // Default sorting (no specific order)
  };

  const sortedLogos = getSortedLogos();

  return (
    <div className="2xl:w-[1400px] xl:[90%] lg:w-[90%] md:w-[90%] mx-auto ">
      <br />
      <br />
      <div></div>
      <div>
        <h1 className="text-regular font-sf-bold text-atlantis-green">
          Sold Items
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
      <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-1 mx-5 sm:mx-0">
        {sortedLogos.map((items) => (
          <div key={items._id}>
            <div>
              <div>
                <div class="relative inline-block rounded-lg overflow-hidden">
                  <img
                    src={items.imageUrls[1]}
                    alt="Sample Image"
                    class="w-full h-auto rounded-lg border border-dark-green"
                  />
                 { items.isFeatured === "featured" && <div class="absolute top-14 -left-7 w-[120px] text-center bg-atlantis-green text-white px-2  text-[11px] font-sf-regular rotate-[-45deg] transform origin-top-left">
                    Featured
                  </div>}
                  <div class="absolute -right-[138px] top-[66px] w-[120px] text-center bg-dark-green text-white px-2  text-[11px] font-sf-regular rotate-[-135deg] transform origin-top-left">
                    <h2 className="rotate-180"> Sold</h2>
                  </div>
                </div>

                <div className="flex justify-between p-2">
                  <h1 className="text-minimum  font-sf-semibold text-dark-green">
                    {items.title}
                  </h1>
                  <h1 className="text-minimum font-sf-bold text-atlantis-green">
                    ${items.price}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoldItems;
