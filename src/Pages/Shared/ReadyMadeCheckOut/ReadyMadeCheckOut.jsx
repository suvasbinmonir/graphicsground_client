import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Modal from "./../Modal/Modal";
// import useUsers from "../../../hooks/useUsers";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useScrollToTop from "../../../hooks/useScrollToTop ";
import useLogos from "../../../hooks/useLogos";

const ReadyMadeCheckOut = () => {
  useScrollToTop();
  const { id } = useParams();
  const [logos] = useLogos();
  const [dt, setDt] = useState();

  useEffect(() => {
    if (logos.length > 0) {
      const foundData = logos.find((dt) => dt._id === id);
      setDt(foundData);
    }
  }, [logos, id]);

  const {
    _id,
    title,
    price,
    tag,
    category,
    description,
    imageUrls,
    isFeatured,
    status,
    zipUrl,
  } = dt || {};

  const axiosPublic = useAxiosPublic();
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const { createUser, user, loading } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  // const { loggedInUser, isLoading, error } = useUsers();
  const [showPromoInput, setShowPromoInput] = useState(false);

  const handlePromoCheckboxChange = () => {
    setShowPromoInput(!showPromoInput);
  };

  const userUID = user?.uid;
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  //options oparetion
  const handleOptionClick = (id) => {
    setSelectedOptions(
      (prevSelectedOptions) =>
        prevSelectedOptions.includes(id)
          ? prevSelectedOptions.filter((optionId) => optionId !== id) // Deselect if already selected
          : [...prevSelectedOptions, id] // Select if not selected
    );
  };

  //total price
  const totalPrice = useMemo(() => {
    return selectedOptions.reduce((total, optionId) => {
      const option = options.find((opt) => opt.id === optionId);
      return total + (option ? option.price : 0); // Ensure price is treated as a number
    }, 0);
  }, [selectedOptions]);

  const selectedItems = useMemo(() => {
    return selectedOptions
      .map((optionId) => {
        const option = options.find((opt) => opt.id === optionId);
        return option
          ? { title: option.addOnTitle, price: option.price }
          : null;
      })
      .filter((item) => item); // Remove null values
  }, [selectedOptions]);

  //  ------------------------------------------------
  //                HANDLE REGISTER
  //  ------------------------------------------------

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phoneNumber = e.target.phoneNum.value;
    setErrorMsg("");
    setSuccessMsg("");

    if (password.length < 6) {
      setErrorMsg("Password should be at least 6 characters");
      return;
    }
    createUser(email, password, displayName, phoneNumber)
      .then((userCredential) => {
        const user = userCredential.user;
        const userInfo = {
          displayName: displayName,
          email: email,
          phoneNumber: phoneNumber || "number is not givent",
          password: password,
        };
        // Sending user info to the backend
        axiosPublic
          .post("/users", userInfo)
          .then((result) => {
            setSuccessMsg(`Account created successfully! Welcome,`);
            // console.log(result);
            setIsModalOpen(true); // Show modal after creating account
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const handleSignInClick = () => {
    if (user) {
      setIsModalOpen(true); // Show modal when logged in
    }
  };

  return (
    <>
      <form onSubmit={handleRegister} className="mb-10">
        <div className=" sm:w-[60%] sm:flex justify-center  m-4 mx-auto ">
          {successMsg && (
            <p className="border-2 py-3 rounded-md border-[#0F5132] w-full  px-20 text-[#75B798] capitalize bg-[#051B11] text-lg  ">
              {successMsg}
            </p>
          )}
          {errorMsg && (
            <p className="border-2 py-3 rounded-md border-[#842029] w-full  px-20 text-[#EA868F] capitalize bg-[#2C0B0E] text-lg ">
              {errorMsg}
            </p>
          )}
        </div>

        <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-5 sm:mx-auto flex items-start sm:items-center  justify-start sm:justify-center py-0 sm:pt-10  ">
          {/* <div className="sm:flex items-center justify-center gap-x-4 pr-4 hidden ">
            <div className="text-regular text-white font-sf-bold border-2 border-dark-green   w-10 h-10 flex items-center justify-center text-center rounded-full">
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
          </div> */}
          <div className="flex items-center justify-center gap-x-4 pr-4">
            <div className="text-regular text-atlantis-green font-sf-bold border-2 border-dark-green   w-10 h-10 flex items-center justify-center text-center rounded-full">
              <h1 className=" w-8 h-8 border rounded-full bg-dark-green flex items-center justify-center text-center">
                1
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
          {/* <div className="hidden sm:flex items-center justify-center gap-x-4 pr-4">
            <div className="text-regular text-white font-sf-bold border-2 border-dark-green   w-10 h-10 flex items-center justify-center text-center rounded-full">
              <h1 className=" w-8 h-8 border rounded-full bg-gray-300 flex items-center justify-center text-center">
                3
              </h1>
            </div>
            <h1 className="text-regular font-sf-semibold text-gray-300">
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
          </div> */}
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="2xl:w-[1400px] xl:w-[90%] flex justify-center  mx-auto w-[95%]">
          <div className="border-2 border-dark-green rounded-2xl p-12 my-10">
            <div>
              <h2 className=" font-bold mb-2 text-regular sm:text-sub-header-2 text-dark-green font-sf-bold">
                Billing Information
              </h2>
              <p className="mb-6 text-minimum sm:text-regular font-sf-regular text-dark-green border-b-2 py-2 border-dark-green">
                Your invoice will be issued according to the details.
              </p>
            </div>
            <div className="flex justify-center flex-col sm:flex-row gap-12">
              <div className="2xl:w-[55%] w-[100%]">
                <div>
                  <div className="space-y-4">
                    {/* Name and Surname */}
                    <div>
                      <label className="block text-sm font-medium text-dark-green font-sf-regular ">
                        Your name and surname
                      </label>
                      <input
                        required
                        type="text"
                        name="userName"
                        className={`mt-1 block w-full  sm:w-[536px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 bg-white placeholder-dark-green ${
                          user ? "cursor-auto" : ""
                        }`}
                        placeholder={user ? user?.displayName : ""}
                        readOnly={user ? true : false}
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-sm font-medium text-dark-green font-sf-regular ">
                        Your email address (We will send your login information
                        here)
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className={`mt-1 block w-full sm:w-[536px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 bg-white placeholder-dark-green ${
                          user ? "cursor-auto" : ""
                        }`}
                        placeholder={user ? user?.email : ""}
                        readOnly={user ? true : false}
                      />
                    </div>

                    {/* password */}
                    {user ? (
                      " "
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-dark-green font-sf-regular ">
                          password
                        </label>
                        <div className="flex  items-center  ">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            required
                            className={`mt-1 block w-full sm:w-[536px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 bg-white placeholder-dark-green ${
                              user ? "cursor-not-allowed" : ""
                            }`}
                            placeholder={user ? user?.password : ""}
                          />
                          <span
                            className="cursor-pointer w-10 -ml-10"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          >
                            {showPassword ? (
                              <FaEye className="w-10" />
                            ) : (
                              <FaEyeSlash className="w-10" />
                            )}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* WhatsApp Number */}
                    <div>
                      <label className="block text-sm font-medium text-dark-green font-sf-regular ">
                        WhatsApp number (For instant communication)
                      </label>
                      <input
                        type="number"
                        name="phoneNum"
                        className={`mt-1 block w-full sm:w-[536px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 bg-white placeholder-dark-green ${
                          user ? "cursor-auto" : ""
                        }`}
                        placeholder={user ? "Number didn't get" : ""}
                        readOnly={user ? true : false}
                        // required
                      />
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                UPGRADE SECTION ADDING ADITIONAL
              ------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* <div>
                <h2 className="text-sub-header-2 text-dark-green font-sf-bold font-bold mb-4">
                  Upgrade your order with extras
                </h2>

                <div className="space-y-4">
                  {options.map((option) => (
                    <label
                      key={option.id}
                      className={`border rounded-lg p-4 flex justify-between items-center cursor-pointer ${
                        selectedOptions.includes(option.id)
                          ? "border-green-500 bg-green-100"
                          : "border-gray-300"
                      }`}
                      onClick={() => handleOptionClick(option.id)}
                    >
                      <div>
                        <h3 className="text-dark-green font-sf-semibold text-regular-lite">
                          {option.title}
                        </h3>
                        {option.description && (
                          <p className="text-sm text-dark-green font-sf-regular  mt-2">
                            {option.description}
                          </p>
                        )}
                        <p className="text-lg font-bold mt-2">
                          ${option.price}
                        </p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 ${
                          selectedOptions.includes(option.id)
                            ? "bg-green-500 border-green-500"
                            : "border-gray-500"
                        }`}
                      />
                    </label>
                  ))}
                </div>
              </div> */}

                <div className="  ">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      id="changeLogoCheckbox"
                      className="mr-2 w-4 h-4 border border-gray-300 rounded-md bg-slate-200 checked:bg-blue-500 checked:text-white checked:border-transparent focus:outline-none "
                      style={{}}
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="changeLogoCheckbox"
                      className="font-medium font-sf-semibold text-sm sm:text-lg"
                    >
                      I want changes to the logo (No additional cost)
                    </label>
                  </div>
                  {isChecked && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 font-sf-regular  sm:w-[536px]">
                        With this option selected, the designer who created this
                        logo will make changes and show you a preview of the
                        logo with the changes applied. You can either approve
                        that preview or you can work with the designer (for up
                        to 30 days) to further fine-tune the logo. No extra
                        charge. It’s a cool process! Turnaround time is one
                        business day per revision.
                      </p>
                      <div className="mt-4 space-y-4">
                        <div>
                          <label
                            htmlFor="companyName"
                            className="block text-sm font-sf-medium text-gray-700"
                          >
                            Company name to use in the logo
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            className="mt-1 block w-full sm:w-[536px] border bg-white border-gray-300 rounded-md shadow-sm p-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="slogan"
                            className="block text-sm font-sf-medium text-gray-700"
                          >
                            Slogan or other text to be added to the logo
                          </label>
                          <input
                            type="text"
                            id="slogan"
                            className="mt-1 block w-full sm:w-[536px] border bg-white border-gray-300 rounded-md shadow-sm p-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="designInstructions"
                            className="block text-sm font-sf-medium text-gray-700"
                          >
                            Additional design instructions
                          </label>
                          <textarea
                            id="designInstructions"
                            className="mt-1 block w-full sm:w-[536px] border bg-white border-gray-300 rounded-md shadow-sm p-2"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------                                                          CHECKOUT CARD && PAYMENT METHOD                                              -------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

              <div className="2xl:w-[40%] xl:w-[40%] ">
                <div className=" border-2 border-dark-green rounded-lg ">
                  {/* Header Section */}
                  <div className="bg-[#f2f2f2] px-8 py-6 rounded-t-lg">
                    <h2 className="text-regular sm:text-sub-header-2 text-dark-green font-sf-bold">
                      {title}
                    </h2>
                    <p className="text-dark-green font-sf-regular text-minimum">
                      Perfect for startups and growing businesses
                    </p>
                    <p className="text-regular sm:text-sub-header-1 font-sf-bold text-dark-green">
                      $ {price}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className=" space-y-2 px-8 py-4">
                    <div className="flex items-center gap-2 py-2">
                      <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      <h1 className="text-minimum font-sf-regular">
                        An Exclusive, trademarkable logo
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 py-2">
                      <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      <h1 className="text-minimum font-sf-regular">
                        A solid 100% Money-Back Garantee
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 py-2">
                      <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      <h1 className="text-minimum font-sf-regular">
                        Customization
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 py-2">
                      <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      <h1 className="text-minimum font-sf-regular">
                        All Files Format
                      </h1>
                    </div>
                  </ul>

                  {/* Divider */}
                  <div className="mx-8">
                    <hr className="border-dashed border-t-3 border-dark-green my-4" />
                  </div>

                  {/* Delivery Time and Add-ons */}
                  <div className="p-8">
                    <div className="mb-4">
                      <div className="">
                        {selectedItems.length > 0 && (
                          <div>
                            <div>
                              {selectedItems.map((item, index) => (
                                <div className="font-sf-regular font-regular text-dark-green">
                                  <h1
                                    key={index}
                                    className="flex justify-between py-2"
                                  >
                                    <span className="flex items-center gap-2">
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        className="text-minimum font-sf-regular"
                                      />
                                      {item.title}
                                    </span>
                                    <span>${item.price}</span>
                                  </h1>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between border-t border-dark-green border-dashed py-2 text-regular-lite font-sf-semibold">
                              <h1>Total</h1>
                              <h1>US${totalPrice}</h1>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-sf-regular font-regular text-dark-green">
                        Total delivery time
                      </span>
                      <span className="font-sf-regular font-regular text-dark-green">
                        3 days
                      </span>
                    </div>

                    {/* Promo Code Input */}
                    <div className="bg-white pb-1">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={showPromoInput}
                          onChange={handlePromoCheckboxChange}
                          className="form-checkbox  text-white border-gray-300 rounded focus:ring-0 focus:text-red-500 selection:text-red-500"
                        />
                        <span className=" font-sf-regular">
                          Have a promo code?
                        </span>
                      </label>

                      {showPromoInput && (
                        <input
                          type="text"
                          placeholder="Enter promo code"
                          className="mt-2 p-2 border rounded bg-white border-black w-full"
                        />
                      )}
                    </div>

                    {/* Total Amount */}
                    <div className="flex justify-between font-bold text-regular mb-6">
                      <span>Total </span>
                      US${price}
                    </div>

                    {/* Confirm and Pay Button */}
                    {!user && (
                      <button className="w-full bg-dark-green text-atlantis-green py-3 rounded-lg text-tab-sub-header-2 font-sf-bold  hover:bg-green-700">
                        Confirm & Pay
                      </button>
                    )}
                    {user && (
                      <button
                        className="w-full bg-dark-green text-atlantis-green py-3 rounded-lg text-tab-sub-header-2 font-sf-bold  hover:bg-green-700"
                        type="button"
                        onClick={handleSignInClick}
                      >
                        Confirm & Pay
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>Payment Method</h2>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </Modal>
      )}
    </>
  );
};

export default ReadyMadeCheckOut;
