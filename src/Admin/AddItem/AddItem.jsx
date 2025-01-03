import { useEffect, useRef, useState } from "react";
import "./AddItem.css"; // Import the external CSS file
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { GoFileZip } from "react-icons/go";
import { RiFolderZipFill } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa";
import Swal from "sweetalert2";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import AdminSearchBar from "../AdminProfile/AdminSearchBar/AdminSearchBar";
import useCategory from "../../hooks/useCategory";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";
const logoIndustry = [
  { _id: "gg-1001", browseName: "Accounting & Finance Logos" },
  { _id: "gg-1002", browseName: "Automotive Logos" },
  { _id: "gg-1003", browseName: "Education Logos" },
  { _id: "gg-1004", browseName: "Home & Real Estate Logos" },
  { _id: "gg-1005", browseName: "Restaurant & Nightclub Logos" },
  { _id: "gg-1006", browseName: "Alphabet Logos" },
  { _id: "gg-1007", browseName: "Children Logos" },
  { _id: "gg-1008", browseName: "Farming Logos" },
  { _id: "gg-1009", browseName: "Internet & Technology Logos" },
  { _id: "gg-1010", browseName: "Retail & Shop Logos" },
  { _id: "gg-1011", browseName: "Animal & Pets Logos" },
  { _id: "gg-1012", browseName: "Christian & Church Logos" },
  { _id: "gg-1013", browseName: "Food & Drink Logos" },
  { _id: "gg-1014", browseName: "Mascot Logos" },
  { _id: "gg-1015", browseName: "Sports Logos" },
  { _id: "gg-1016", browseName: "Arts & Photography Logos" },
  { _id: "gg-1017", browseName: "Eco-Friendly & Green Logos" },
  { _id: "gg-1018", browseName: "Health & Lifestyle Logos" },
  { _id: "gg-1019", browseName: "Music & Dance Logos" },
  { _id: "gg-1020", browseName: "Travel & Hospitality Logos" },
];

function AddItem() {
  const [categroy] = useCategory();
  const axiosPublic = useAxiosPublic();
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image1, setImage1] = useState(null); // First image input
  const [image2, setImage2] = useState(null); // Second image input
  const [zipFile, setZipFile] = useState(null);
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [descriptionPoint, setDescriptionPoint] = useState("");
  const [descriptionConclusion, setDescriptionconClusion] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]); // Store selected categories
  const [searchText, setSearchText] = useState(""); // Input search text
  const [showDropdown, setShowDropdown] = useState(false);
  const [titless, setNewCategory] = useState("");
  const dropdownRef = useRef(null);
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);

  //add new category oparetion
  const handleNewCategory = async (e) => {
    e.preventDefault();
    const newCategory = { title: titless };

    try {
      const response = await axiosSecure.post("/category", newCategory);

      if (!response.data || !response.data.insertedId) {
        console.error("Server responded with error:", response.data);
        throw new Error("Failed to add category");
      }

      // console.log("Category added:", response.data);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      setNewCategory("");
    } catch (error) {
      console.error(
        "Error adding category:",
        error.response?.data || error.message
      );
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to Add Category",
        text: error.response?.data?.message || "Please try again later.",
        showConfirmButton: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    // const toastId = toast.loading("Uploading, please wait...");
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("descriptionTitle", descriptionTitle);
    formData.append("descriptionPoint", descriptionPoint);
    formData.append("descriptionConclusion", descriptionConclusion);
    formData.append("price", price);
    formData.append("tag", tag);
    // Handle selected categories array
    formData.append("selectedCategories", JSON.stringify(selectedCategories));
    if (image1) formData.append("images", image1);
    if (image2) formData.append("images", image2);
    if (zipFile) formData.append("zipFile", zipFile);
    // console.log(JSON.stringify(selectedCategories));
    // Post to the backend
    try {
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json", // Or "multipart/form-data" for file uploads
      //   },
      // };
      const response = await axiosSecure.post("/upload", formData);
      const data = response;

      if (response.data.message) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setTitle("");
        setPrice("");
        setTag("");
        setImage1(null);
        setImage2(null);
        setZipFile(null);
        setSelectedCategories([]);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Error: ${data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      // console.log(error, "this is the upload error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // CATEGORY TAGS FUNCTION
  const handleRemoveCategory = (category) => {
    setSelectedCategories(
      selectedCategories.filter((item) => item !== category)
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto">{/* <AdminSearchBar /> */}</div>
      <div className="min-h-screen my-10 mx-20 border border-dark-green rounded-2xl p-10">
        <div className="flex justify-between ">
          <h1 className="text-regular font-sf-bold uppercase mb-6">
            Upload Your Files
            {/* {isLoading && <ToastContainer />} */}
          </h1>
          <form onSubmit={handleNewCategory}>
            <input
              type="text"
              placeholder="New Category"
              value={titless}
              onChange={(e) => setNewCategory(e.target.value)}
              required
              className="bg-white w-72 border rounded h-10 border-dark-green pl-2 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-dark-green text-white text-regular-lite font-sf-regular h-10 px-3 ml-2"
            >
              Add Category
            </button>
          </form>
        </div>

        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="bg-white border border-dark-green rounded h-14 outline-none pl-2 w-full placeholder:text-dark-green placeholder:font-sf-regular"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="bg-white border border-dark-green rounded h-14 outline-none pl-2 w-full placeholder:text-dark-green placeholder:font-sf-regular"
            />
          </div>

          {/* CATEGORY TAG SECTION  */}
          <div className="bg-white mb-4 relative" ref={dropdownRef}>
            {/* Selected Categories */}
            <div
              className="flex flex-wrap items-center gap-2 border border-black rounded px-4 py-2 bg-white cursor-text w-full h-auto"
              onClick={() => setShowDropdown(true)}
            >
              {selectedCategories.map((category) => (
                <span
                  key={category._id}
                  className="flex items-center bg-blue-200 text-dark-green py-2 pl-4 font-sf-semibold rounded text-sm"
                >
                  {category.browseName}
                  <button
                    className="ml-2 text-dark-green  hover:text-blue-600  w-7 "
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveCategory(category);
                    }}
                  >
                    <RxCross2 className="text-red-600 font-bolder text-lg " />
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Select categories"
                className="flex-grow focus:outline-none bg-white h-10 placeholder-gray-500 placeholder:text-dark-green placeholder:font-sf-semibold placeholder:text-sm"
                onFocus={() => setShowDropdown(true)}
              />
            </div>
            {/* Dropdown List */}
            {showDropdown && (
              <ul className="absolute bg-white border rounded-lg mt-1 overflow-y-auto shadow-lg z-10 w-full h-[300px]">
                {logoIndustry
                  .filter((indus) =>
                    indus.browseName
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  )
                  .map((indus) => (
                    <li
                      key={indus._id}
                      onClick={() => handleSelectCategory(indus)}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                        selectedCategories.includes(indus) ? "bg-gray-300" : ""
                      }`}
                    >
                      {indus.browseName}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="mb-4">
            <textarea
              type="text"
              placeholder="Tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
              className="bg-white border border-dark-green rounded h-32 outline-none pl-2 w-full placeholder:text-dark-green placeholder:font-sf-regular"
            />
          </div>

          {/* DESCTION SECTION  */}
          <section>
            <div className="mb-4">
              <textarea
                type="text"
                placeholder="Description Title"
                value={descriptionTitle}
                onChange={(e) => setDescriptionTitle(e.target.value)}
                required
                className="bg-white border border-dark-green rounded h-[75px] outline-none pl-2 pt-1 w-full placeholder:text-dark-green placeholder:font-sf-regular"
              />
            </div>
            <div className="mb-4">
              <textarea
                type="text"
                placeholder="Description Point"
                value={descriptionPoint}
                onChange={(e) => setDescriptionPoint(e.target.value)}
                required
                className="bg-white border border-dark-green rounded h-32 outline-none pl-2 w-full placeholder:text-dark-green placeholder:font-sf-regular"
              />
            </div>
            <div className="mb-4">
              <textarea
                type="text"
                placeholder="Description Conclusion"
                value={descriptionConclusion}
                onChange={(e) => setDescriptionconClusion(e.target.value)}
                required
                className="bg-white border border-dark-green rounded h-[70px] outline-none pl-2 pt-1 w-full placeholder:text-dark-green placeholder:font-sf-regular"
              />
            </div>
          </section>

          <div className="flex justify-between gap-5">
            {/* First Image Input */}
            <div className="relative border border-dark-green h-40 rounded p-2 w-full">
              <input
                type="file"
                onChange={(e) => setImage1(e.target.files[0])} // First image input
                required
                className="hidden"
                id="customImageUpload1"
              />
              <label
                htmlFor="customImageUpload1"
                className="flex flex-col items-center justify-center h-full cursor-pointer text-dark-green"
              >
                <FaRegImage className="text-3xl text-yellow-600" />
                <p className="text-regular-lite font-sf-regular pt-2">
                  Upload your{" "}
                  <span className="font-sf-bold uppercase text-red-700">
                    watermark
                  </span>{" "}
                  file
                </p>
                {image1 && (
                  <p className="mt-2 text-sm text-gray-500">{image1.name}</p>
                )}
              </label>
              {image1 && (
                <button
                  onClick={() => setImage1(null)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Second Image Input */}
            <div className="relative border border-dark-green h-40 rounded p-2 w-full">
              <input
                type="file"
                onChange={(e) => setImage2(e.target.files[0])} // Second image input
                required
                className="hidden"
                id="customImageUpload2"
              />
              <label
                htmlFor="customImageUpload2"
                className="flex flex-col items-center justify-center h-full cursor-pointer text-dark-green"
              >
                <FaRegImage className="text-3xl text-yellow-600" />
                <p className="text-regular-lite font-sf-regular pt-2">
                  Upload your{" "}
                  <span className="font-sf-bold uppercase text-red-700">
                    main
                  </span>{" "}
                  file
                </p>
                {image2 && (
                  <p className="mt-2 text-sm text-gray-500">{image2.name}</p>
                )}
              </label>
              {image2 && (
                <button
                  onClick={() => setImage2(null)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              )}
            </div>

            {/* ZIP File Input */}
            <div className="relative border border-dark-green h-40 rounded p-2 w-full">
              <input
                type="file"
                onChange={(e) => setZipFile(e.target.files[0])}
                required
                className="hidden"
                id="customFileUpload"
              />
              <label
                htmlFor="customFileUpload"
                className="flex flex-col items-center justify-center h-full cursor-pointer text-dark-green"
              >
                <RiFolderZipFill className="text-3xl text-yellow-600" />
                <p className="text-regular-lite font-sf-regular pt-2">
                  Upload the{" "}
                  <span className="font-sf-bold text-red-700 uppercase">
                    zip
                  </span>{" "}
                  file
                </p>
                {zipFile && (
                  <p className="mt-2 text-sm text-gray-500">{zipFile.name}</p>
                )}
              </label>
              {zipFile && (
                <button
                  onClick={() => setZipFile(null)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className={` text-atlantis-green uppercase font-sf-semibold text-regular bg-dark-green px-10 p-2 rounded-lg mt-4 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddItem;
