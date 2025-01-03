import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaBold, FaItalic, FaUpload, FaTimes } from "react-icons/fa"; // Importing icons

const CaseStudyForm = () => {
  const [fields, setFields] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [category, setCategory] = useState("");
  const [currentId, setCurrentId] = useState(1001); // Start the ID from 1001
  const [scrollPosition, setScrollPosition] = useState(0);
  const [name, setName] = useState("");
  const generateCustomId = () => {
    const id = `gg-${currentId}`;
    setCurrentId(currentId + 1);
    return id;
  };

  const addTextField = () => {
    const newField = {
      type: "text",
      customId: generateCustomId(),
      value: "",
      bold: false,
      italic: false,
      size: "20px",
      alignment: "left",
      color: "#002626",
    };
    setFields((prevFields) => [...prevFields, newField]);
  };

  const addImageField = () => {
    const newField = {
      type: "image",
      customId: generateCustomId(),
      files: [],
    };
    setFields((prevFields) => [...prevFields, newField]);
  };

  const handleTextFieldChange = (index, event) => {
    const updatedFields = [...fields];
    updatedFields[index].value = event.target.value;
    setFields(updatedFields);
  };

  const toggleBold = (index) => {
    const updatedFields = [...fields];
    updatedFields[index].bold = !updatedFields[index].bold;
    setFields(updatedFields);
  };

  const toggleItalic = (index) => {
    const updatedFields = [...fields];
    updatedFields[index].italic = !updatedFields[index].italic;
    setFields(updatedFields);
  };

  const handleImageChange = (index, e) => {
    const updatedFields = [...fields];
    // console.log(updatedFields, "hello vhosrike");
    // console.log(updatedFields[index].files = e.target.files, 'mc')
    updatedFields[index].files = e.target.files;
    setFields(updatedFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      setError("Please select a category.");
      return;
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("name", name);

    fields.forEach((field) => {
      formData.append("fields[]", JSON.stringify(field)); // Stringify each field and send as an array of objects
      if (field.type === "image" && field.files.length > 0) {
        Array.from(field.files).forEach((file) => {
          formData.append("images", file); // Attach images
        });
      }
    });

    try {
      const response = await axios.post(
        `https://api.graphicsground.com/casestudy`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        setSuccessMessage("Case study created successfully!");
        setFields([]);
      }
    } catch (err) {
      setError("An error occurred while creating the case study");
    }
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="ml-10">
      <form
        onSubmit={handleSubmit}
        className="w-[100%] mx-auto bg-dark-green rounded-lg shadow-lg min-h-screen py-5"
      >
        <div
          className={`sticky top-0 z-50 bg-dark-green py-3 pt-6 transition-shadow duration-300 ${
            scrollPosition > 0 ? "shadow-lg shadow-white" : ""
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="mr-2">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full  text-regular-lite mr-4 border-2 bg-dark-green  px-10 py-2 rounded-lg text-white hover:border-black hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                <option value="">Select a category</option>
                <option value="packaging">Packaging</option>
                <option value="imgToVector">Img To Vector</option>
                <option value="brand">Brand</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <button
              type="button"
              onClick={addTextField}
              className="flex items-center text-regular-lite mr-4 border-2 px-10 py-2 rounded-lg text-white hover:border-black hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              <FaPlus className="mr-2" />
              Add More Text
            </button>

            <button
              type="button"
              onClick={addImageField}
              className="flex items-center text-regular-lite mr-4 border-2 px-10 py-2 rounded-lg text-white hover:border-black hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              <FaPlus className="mr-2" />
              Add More Image
            </button>
          </div>
        </div>
        <div className="mx-10 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Case Study Name"
            value={name} // Bind the state here
            onChange={(e) => setName(e.target.value)} // Update state on change
            className="bg-white outline-none border-dark-green py-5 rounded w-full p-2 text-regular"
          />
        </div>

        {fields.map((field, index) => (
          <div key={index} className="mb-4 mx-10">
            <div className="text-white mb-2">{`Custom ID: ${field.customId}`}</div>{" "}
            {/* Show custom ID */}
            {field.type === "text" ? (
              <div>
                <textarea
                  value={field.value}
                  onChange={(e) => handleTextFieldChange(index, e)}
                  placeholder="Enter text"
                  required
                  className={`w-full pt-5 pl-4 font-sf-regular bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                    ${field.bold ? "font-bold" : ""} ${
                    field.italic ? "italic" : ""
                  } 
                    ${field.value ? "border-transparent" : ""}`}
                  style={{
                    fontSize: field.size,
                    textAlign: field.alignment,
                    color: field.color,
                  }}
                />
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    type="button"
                    className="flex items-center text-sm"
                    onClick={() => toggleBold(index)}
                  >
                    <FaBold className="mr-1 bg-white w-14 py-1 h-9 rounded border-2 border-white" />
                  </button>

                  <button
                    type="button"
                    className="flex items-center text-sm"
                    onClick={() => toggleItalic(index)}
                  >
                    <FaItalic className="mr-1 bg-white w-14 py-1 h-9 rounded  border-white" />
                  </button>

                  <select
                    value={field.size}
                    onChange={(e) => {
                      const updatedFields = [...fields];
                      updatedFields[index].size = e.target.value;
                      setFields(updatedFields);
                      // console.log(updatedFields); // Log the updated fields after size change
                    }}
                    className="p-2 bg-white  border-gray-300 rounded-lg"
                  >
                    <option value="49px">49px</option>
                    <option value="40px">40px</option>
                    <option value="32px">32px</option>
                    <option value="24px">24px</option>
                    <option value="20px">20px</option>
                    <option value="16px">16px</option>
                    <option value="14px">14px</option>
                  </select>

                  <select
                    value={field.alignment}
                    onChange={(e) => {
                      const updatedFields = [...fields];
                      updatedFields[index].alignment = e.target.value;
                      setFields(updatedFields);
                      // console.log(updatedFields); // Log the updated fields after alignment change
                    }}
                    className="p-2 bg-white  border-gray-300 rounded-lg"
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                  </select>

                  <select
                    value={field.color}
                    onChange={(e) => {
                      const updatedFields = [...fields];
                      updatedFields[index].color = e.target.value;
                      setFields(updatedFields);
                      // console.log(updatedFields); // Log the updated fields after color change
                    }}
                    className="p-2 bg-white  border-gray-300 rounded-lg"
                  >
                    <option value="#002626">Dark Green</option>
                    <option value="#99CC33">Atlantis Green</option>
                    <option value="#E6E6E6">Platinum</option>
                    <option value="#FFFFFF">White</option>
                    <option value="#808080">Gray</option>
                  </select>
                </div>
              </div>
            ) : (
              <div>
                {field.files.length > 0 ? (
                  <img
                    src={URL.createObjectURL(field.files[0])}
                    alt="Uploaded"
                    className="w-full h-auto mb-4 rounded-lg"
                  />
                ) : (
                  <div>
                    <label className="block text-regular font-semibold mb-2 text-white">
                      Upload Images
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleImageChange(index, e)}
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
              </div>
            )}
            <button
              type="button"
              onClick={() => removeField(index)}
              className="flex items-center text-sm text-red-500 mt-2"
            >
              <FaTimes className="mr-2" />
              Remove
            </button>
          </div>
        ))}

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}

        <div className="mt-5 flex justify-center">
          <button
            type="submit"
            className="flex items-center bg-white text-regular-lite mr-4 border-2 px-10 py-2 rounded-lg text-black hover:border-black hover:bg-dark-green hover:text-white transition duration-300 ease-in-out"
          >
            <FaUpload className="mr-2" />
            Submit Case Study
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaseStudyForm;
