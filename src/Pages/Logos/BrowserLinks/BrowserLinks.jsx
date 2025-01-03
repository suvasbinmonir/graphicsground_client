import axios from "axios";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import useLogos from "./../../../hooks/useLogos";

const BrowserLinks = () => {
  const [logos, refetch] = useLogos();
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState("");
  const selectedCategory = selectedLogo?.browseName;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.graphicsground.com/api/category`
      );
      if (!response.ok) throw new Error("Failed to load JSON data");
      const result = await response.json();
      const arrayData = Array.isArray(result) ? result : Object.values(result);
      setCategory(arrayData);
    } catch (err) {
      // console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  const openPopup = (logo) => {
    setSelectedLogo(logo);
  };

  const closePopup = () => {
    setSelectedLogo(null);
  };

  // Filter logos that match the selectedCategory
  const filteredLogos = logos.filter((logo) =>
    logo.selectedCategories?.some((cat) => cat.browseName === selectedCategory)
  );

  return (
    <div className="2xl:w-[1400px] xl:w-[90%] lg:[90%] mx-auto">
      <h1 className="2xl:text-sub-header-1 xl:text-sub-header-1 lg:text-tab-sub-header-1 font-sf-bold text-center text-tab-sub-header-2">
        Browse ready-made logos by industry
      </h1>
      {/* Buttons for each logo industry */}
      <div className="grid grid-cols-2 items-baseline  sm:grid-cols-4 place-content-center text-base-content   w-fit  sm:pt-10  mx-auto 2xl:text-minimum xl:text-minimum lg:text-tab-minimum font-sf-regular">
        {category.map((logo) => (
          <button
            key={logo._id}
            onClick={() => openPopup(logo)}
            className="text-start py-1  w-fit pr-10"
          >
            <a className="link link-hover sm:text-tab-regular  text-dark-green">
              {logo.browseName}
            </a>
          </button>
        ))}
      </div>

      {/* Full-width popup */}
      {selectedLogo && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 w-full max-w-3xl p-14 rounded-lg shadow-lg min-h-[80vh] min-w-[80vw]">
            <button
              onClick={closePopup}
              className="absolute top-[105px] right-48 text-dark-green bg-atlantis-green p-2 rounded text-2xl animate-slide-up"
            >
              <FiX />
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {selectedLogo.browseName}
            </h2>
            <p className="text-white">
              Details about {selectedLogo.browseName} will go here.
            </p>

            {/* Display images of matching logos */}
            <div className="grid grid-cols-5 gap-4 mt-6 animate-slide-up">
              {filteredLogos.map((logo) => (
                <div key={logo._id} className="flex flex-col items-center">
                  <img
                    src={logo.imageUrls[0] || "/default-image.png"}
                    alt={logo.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowserLinks;
