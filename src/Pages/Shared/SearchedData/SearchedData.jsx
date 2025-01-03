import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SearchedData = () => {
  const [logos, setLogos] = useState([]); // Store fetched logos
  const [loading, setLoading] = useState(true); // Loading state
  const location = useLocation(); // To access the current location (URL)
  // Extract the search query from the URL
  const query = new URLSearchParams(location.search).get("query");
  const axiosPublic = useAxiosPublic();

  // Fetch the logos when the component mounts or when query changes
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await axiosPublic.get(`/search?query=${query}`); // Use axiosPublic
        setLogos(response.data); // Set the logos in state
      } catch (error) {
        console.error("Error fetching logos:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    if (query) {
      fetchLogos();
    }
  }, [query, axiosPublic]);
  return (
    <div className="container mx-auto p-4 my-20">
      <h2 className="text-xl font-semibold mb-4">
        Search Results for "{query}"
      </h2>

      {/* Show loading skeletons while data is loading */}
      {loading ? (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[...Array(15)].map((_, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="skeleton bg-gray-300 h-40 w-full rounded"></div>
              <div className="flex justify-between">
                <div className="skeleton bg-gray-300 h-4 w-36 rounded"></div>
                <div className="skeleton bg-gray-300 h-4 w-16 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {logos.map((logo) => (
            <div className="logo-item-container" key={logo._id}>
              <Link to={`/product-page/${logo._id}`} state={{ logo }}>
                <div class="relative inline-block rounded-lg overflow-hidden">
                  <img
                    src={logo.imageUrls[1]}
                    alt={logo.title}
                    className="w-full h-auto rounded-lg border border-dark-green "
                  />
                  {logo.isFeatured === "featured" && (
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

              <div className="tooltip">
                {/* Uncomment this section if you need the magnifying glass icon */}
                {/* <div className="icon-wrapper">
          <FontAwesomeIcon
            className="tooltip-image cursor-pointer"
            icon={faMagnifyingGlass}
          />
        </div> */}
                <div className="tooltip-text cursor-pointer">
                  <img src={logo.imageUrls[1]} alt={logo.title} />
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <h1 className="text-minimum font-dark-green font-sf-medium -top-4 relative pt-4">
                  {logo.title}
                </h1>
                <h1 className="text-[18px] font-dark-green font-sf-bold -top-4 relative">
                  ${logo.price}
                </h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchedData;
