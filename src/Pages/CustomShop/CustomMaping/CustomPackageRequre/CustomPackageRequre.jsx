import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./CustomPackageRequire.css";
import {
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";
import { FaFileImage, FaFileArchive } from "react-icons/fa";
import useAxiosPublic from "./../../../../hooks/useAxiosPublic";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useRequireCustomId from "../../../../hooks/useRequireCustomId";
import usePackage from "../../../../hooks/usePackage";
const CustomPackageRequre = () => {
  const { id, id3 } = useParams();
  const [packages] = usePackage();
  // console.log(packages);
  const [customId] = useRequireCustomId();
  const axiosPablic = useAxiosPublic();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [zipFiles, setZipFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachmentsVisible, setAttachmentsVisible] = useState(false);
  const [title, setTitle] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    title: "",
    color: "",
    description: "",
    ideas: "",
    requireCustomId: "",
  });
  useEffect(() => {
    const category = packages.filter((item) => item._id === id);
    const categoryTitle = category.map((item) => item.title)[0]; // Get the first title if it exists
    if (categoryTitle) {
      setTitle(categoryTitle);
    }
  }, [packages, id]); // Dependencies to re-run when packages or id changes

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      title: title,
      requireCustomId: id3,
    }));
  }, [title, id3]); // Dependencies to trigger this effect

  useEffect(() => {
    // Ensure customId and id3 are available before proceeding
    if (!customId || !id3) {
      // console.log("Custom ID or id3 is missing");
      setLoading(false);
      return;
    }

    // Check if id3 exists in the customId array
    if (customId.includes(id3)) {
      // console.log("ID found, navigating to home...");
      navigate("/"); // Navigate to the home page
    } else {
      // console.log(`${id3} is not found in the customId array.`);
    }

    setLoading(false); // Hide loader after the operation
  }, [customId, id3, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files
      .filter((file) => !images.some((img) => img.file.name === file.name))
      .map((file) => ({ file, preview: URL.createObjectURL(file) }));
    setImages((prevImages) => [...prevImages, ...newFiles]);
  };

  const handleZipUpload = (e) => {
    const files = Array.from(e.target.files);
    const zipFileData = files.map((file) => ({ file, name: file.name }));
    setZipFiles((prevZips) => [...prevZips, ...zipFileData]);
  };

  const removeImage = (index) => {
    const imageToRemove = images[index];
    URL.revokeObjectURL(imageToRemove.preview); // Free up memory
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const removeZipFile = (index) => {
    setZipFiles((prevZips) => prevZips.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submits

    setIsSubmitting(true);

    // Show the loading toast
    const toastId = toast.loading("Uploading, please wait...");

    try {
      // Basic validation
      if (!formData.name || !formData.slogan || !formData.color) {
        setIsSubmitting(false);
        toast.update(toastId, {
          render: "Please fill in all required fields.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return;
      }

      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");

      // Format the date and time as `day/month/year || time`
      const formattedDateTime = `${day}/${month}/${year} || ${hours}:${minutes}`;
      setFormData((prevData) => ({
        ...prevData,
        title: title,
        requireCustomId: id3,
        submittedAt: formattedDateTime,
      }));
      // if (images.length === 0 && zipFiles.length === 0) {
      //   setIsSubmitting(false);
      //   toast.update(toastId, {
      //     render: "Please upload at least one image or zip file.",
      //     type: "error",
      //     isLoading: false,
      //     autoClose: 3000,
      //   });
      //   return;
      // }

      const formDataWithFiles = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataWithFiles.append(key, formData[key]);
      });
      images.forEach((image) => {
        formDataWithFiles.append("images", image.file);
      });
      zipFiles.forEach((zip) => {
        formDataWithFiles.append("zipFiles", zip.file);
      });

      const response = await axios.post(
        `https://api.graphicsground.com/requirement`,
        formDataWithFiles,
        formattedDateTime
      );

      if (response.data.message) {
        toast.update(toastId, {
          render: "Requirement submitted successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        navigate("/profile/user");
      } else {
        toast.update(toastId, {
          render: "Something went wrong. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.update(toastId, {
        render: "Failed to submit the requirement. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="w-fit mx-auto">
          {" "}
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      ) : (
        <div>
          <ToastContainer />
          <div className="mb-5 sm:mx-auto flex items-start sm:items-center  justify-start sm:justify-center py-3 sm:py-10 bg-gray-100 ">
            <div className="sm:flex items-center justify-center gap-x-4 pr-4 hidden ">
              <div className="text-regular text-dark-green font-sf-bold border-2 border-dark-green   w-10 h-10 flex items-center justify-center text-center rounded-full">
                <h1 className=" w-8 h-8 border rounded-full bg-dark-green text-atlantis-green flex items-center justify-center text-center">
                  1
                </h1>
              </div>
              <h1 className="text-regular font-sf-semibold text-dark-green">
                Select Package
              </h1>
              <h1>
                <FontAwesomeIcon
                  className=" pt-2 -ml-2 h-5 "
                  icon={faChevronRight}
                />
              </h1>
            </div>
            <div className="flex items-center justify-center gap-x-4 pr-4">
              <div className="text-regular text-atlantis-green font-sf-bold border-2 border-dark-green   w-10 h-10 flex items-center justify-center text-center rounded-full">
                <h1 className=" w-8 h-8 border rounded-full bg-dark-green flex items-center justify-center text-center">
                  2
                </h1>
              </div>
              <h1 className="text-regular font-sf-semibold text-dark-green ">
                Confirm & Pay
              </h1>
              <h1>
                <FontAwesomeIcon
                  className=" pt-2 -ml-2 h-5 "
                  icon={faChevronRight}
                />
              </h1>
            </div>
            <div className="hidden sm:flex items-center justify-center gap-x-4 pr-4">
              <div className="text-regular text-white font-sf-bold border-2 border-dark-green   w-10 h-10 flex items-center justify-center text-center rounded-full">
                <h1 className=" w-8 h-8 border rounded-full bg-dark-green text-atlantis-green flex items-center justify-center text-center">
                  3
                </h1>
              </div>
              <h1 className="text-regular font-sf-semibold text-dark-green">
                Describe Brief
              </h1>
              <h1>
                <FontAwesomeIcon
                  className=" pt-2 -ml-2 h-5 "
                  icon={faChevronRight}
                />
              </h1>
            </div>
            <div className="hidden sm:flex items-center justify-center gap-x-4">
              <div className="text-regular text-white font-sf-bold border-2 border-dark-green   w-10 h-10 flex items-center justify-center text-center rounded-full">
                <h1 className=" w-8 h-8 border rounded-full bg-gray-300 flex items-center justify-center text-center">
                  4
                </h1>
              </div>
              <h1 className="text-regular font-sf-bold text-gray-300">
                Submit Requerment
              </h1>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="border my-10 border-dark-green 2xl:w-[1100px] mx-auto px-10 py-10 rounded-lg">
            <div>
              <h1 className="text-dark-green font-sf-bold text-sub-header-2">
                <span className="text-atlantis-green">Image To Vector</span>{" "}
                Describe Brief
              </h1>
              <h1 className="text-dark-green font-sf-regular text-regular-lite">
                Fill out the brief so the designers know that you are looking
                for.
              </h1>
              <h1 className="text-dark-green border-t-2 border-dark-green mb-5 mt-2"></h1>
              {/* //todo: custom  */}
            </div>
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="flex flex-row">
                <div className="w-96 ">
                  <h1 className="text-dark-green font-sf-semibold text-regular">
                    Design Infromation
                  </h1>
                </div>
                <div className="w-full">
                  <label className="form-control mb-6">
                    <div className="label">
                      <span className="text-regular-litetext-dark-green font-sf-regular">
                        What name do you want in your logo?
                      </span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2  border  rounded-md border-dark-green bg-white outline-none text-dark-green font-sf-regular"
                    />
                    <span className="label-text-alt text-dark-green font-sf-regular">
                      It includes the business, text or product name. e.g.
                      "BigData"
                    </span>
                  </label>
                  <label className="form-control mb-6">
                    <div className="label">
                      <span className="text-regular-litetext-dark-green font-sf-regular">
                        Do you have a name you wnat incorporated in your logo?
                      </span>
                    </div>
                    <input
                      type="text"
                      name="slogan"
                      required
                      value={formData.slogan}
                      onChange={handleInputChange}
                      className="w-full p-2  border  rounded-md border-dark-green bg-white outline-none text-dark-green font-sf-regular"
                    />
                    <span className="label-text-alt text-dark-green font-sf-regular">
                      It's a short phrase that follows your business or brand
                      name. In short mission statement. e.g. "I'm loving it!"
                    </span>
                  </label>
                  <label className="form-control mb-6">
                    <div className="label">
                      <span className="text-regular-litetext-dark-green font-sf-regular">
                        What description do you prefer?
                      </span>
                    </div>
                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2  border  rounded-md border-dark-green bg-white outline-none text-dark-green font-sf-regular"
                    />
                    <span className="label-text-alt text-dark-green font-sf-regular">
                      It's a short phrase that follow your business or brand
                      name. In short staement. e.g. "I'm loving it!"
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex">
                <div className="w-96">
                  <h1 className="text-dark-green text-regular font-sf-semibold">
                    Others
                  </h1>
                </div>
                <div className="w-full">
                  <label className="form-control mb-6">
                    <span className="text-regular-litetext-dark-green font-sf-regular">
                      Is there anything else you would like to communicate to
                      the designers?
                    </span>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded-md outline-none text-dark-green font-sf-regular bg-white border-dark-green"
                      rows="4"
                    ></textarea>
                    <span className="label-text-alt text-dark-green font-sf-regular">
                      Please type here....
                    </span>
                  </label>

                  <div className="border min-h-44 p-5 rounded-md border-dark-green ">
                    {images.length > 0 || zipFiles.length > 0 ? (
                      <div className="">
                        <div className="grid grid-cols-5 gap-4 mb-4">
                          {images.map((image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={image.preview}
                                alt="Preview"
                                className="w-full h-32 object-cover rounded-md border"
                              />
                              <button
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                              >
                                <AiOutlineClose size={16} />
                              </button>
                              <p className="text-center text-sm mt-1 break-words">
                                {image.file.name}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4"></div>
                        {zipFiles.map((zip, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between bg-indigo-100 p-2 rounded mb-2 "
                            >
                              <FaFileArchive className="text-orange-400 mr-2" />
                              <p className="flex-1 break-words text-sm">
                                {zip.name}
                              </p>
                              <button
                                onClick={() => removeZipFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <AiOutlineClose />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <h1 className="text-dark-green text-regular-lite text-center pt-12 flex justify-center items-center">
                        If you have any ideas share with us!{" "}
                        <AiOutlineCloudUpload className="ml-2" />
                      </h1>
                    )}
                    <div
                      className={
                        images.length > 0 || zipFiles.length > 0
                          ? "-mb-32 mt-36"
                          : "-mb-32 mt-20"
                      }
                    >
                      {
                        <input
                          type="text"
                          name="ideas"
                          value={formData.ideas}
                          onChange={handleInputChange}
                          className="w-full p-2 h-12 pl-14 pr-16  border  rounded-md border-dark-green bg-white outline-none text-dark-green font-sf-regular text-ellipsis"
                        />
                      }
                    </div>
                    <div className="flex items-end content-center justify-between bottom-0 px-1 ">
                      <div>
                        <div className="relative p-0 ml-2  mt-20">
                          <button
                            onClick={() =>
                              setAttachmentsVisible(!attachmentsVisible)
                            }
                            type="button"
                            className="flex items-center pt-[15px]  text-dark-green rounded-md"
                          >
                            <CgAttachment className="text-regular-lite  " />
                          </button>
                          {attachmentsVisible && (
                            <div className="absolute bottom-full mb-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                              <label
                                htmlFor="imageUpload"
                                className=" p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                              >
                                <FaFileImage className="mr-2" /> Upload Image
                              </label>
                              <input
                                type="file"
                                id="imageUpload"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                              />

                              <label
                                htmlFor="zipUpload"
                                className=" p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                              >
                                <FaFileArchive className="mr-2" /> Upload Zip
                              </label>
                              <input
                                type="file"
                                id="zipUpload"
                                accept=".zip"
                                className="hidden"
                                onChange={handleZipUpload}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-4 w-fit font-sf-regular text-regular mr-5 text-base flex items-center gap-3"
                      >
                        Send
                        {/* <BsFillSendArrowUpFill className="mt-1" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomPackageRequre;
