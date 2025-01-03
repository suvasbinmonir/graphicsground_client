import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import Modal from "../Modal/Modal";
import CustomPackageModal from "../Modal/CustomPackageModal";
import useScrollToTop from "../../../hooks/useScrollToTop ";
import usePackage from "../../../hooks/usePackage";

const CustomPackageCheckOut = () => {
  useScrollToTop();
  const { id, id2 } = useParams();
  const [pack] = usePackage();
  const axiosPublic = useAxiosPublic();
  const [packDt, setPackDt] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const { createUser, user, loading } = useAuth();
  const [successMsg, setSuccessMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [cardDetails, setCardDetail] = useState(null);
  const [deliTime, setDeliTime] = useState(0); // Initialize state for delivery time
  console.log(deliTime, "hi");
  useEffect(() => {
    if (cardDetails?.deliveryTime) {
      const parsedDeliveryTime = parseInt(cardDetails.deliveryTime, 10); // Convert delivery time to number
      if (parsedDeliveryTime !== deliTime) {
        setDeliTime(parsedDeliveryTime); // Update state if the value is different
      }
    }
  }, [cardDetails?.deliveryTime]); // Only trigger when `cardDetails.deliveryTime` changes

  useEffect(() => {
    if (pack.length > 0) {
      const foundData = pack.find((dt) => dt._id === id);
      setPackDt(foundData);
    }
  }, [pack, id]);
  const { card1 = {}, card2 = {}, card3 = {}, _id } = packDt || {};
  const options = [
    {
      id: "extra-fast-delivery",
      title: "Extra fast 1 day delivery",
      addOnTitle: "Extra fast",
      description: "",
      price: 30,
    },
    {
      id: "stationery-design",
      title: "Stationery design",
      addOnTitle: "Stationery ",
      description:
        "You'll get a template with your logo to use for stationery—business cards, letterhead and invoice.",
      price: 30,
    },
    {
      id: "favicon",
      title: "Favicon",
      addOnTitle: "Favicon",
      description: "You’ll get favicon icon size for your website & others.",
      price: 20,
    },
    {
      id: "mini-brand-guideline",
      title: "Mini brand guideline (Color, typography, do's & doesn't)",
      addOnTitle: "Brand guideline",
      description:
        "You will get a mini brand guideline like- color palette, typography guideline, do's and don'ts.",
      price: 50,
    },
    {
      id: "additional-logo-concept",
      title: "Additional logo concept",
      addOnTitle: "Additional concept",
      description: "Add another (1) logo concept.",
      price: 30,
    },
  ];

  useEffect(() => {
    const idDataPackage = pack.filter((item) => item._id === id);

    if (idDataPackage.length > 0) {
      const cards = [
        idDataPackage[0].card1,
        idDataPackage[0].card2,
        idDataPackage[0].card3,
      ];
      const idDataCard = cards.find((card) => {
        if (card.packageName) {
          const transformedName = card.packageName
            .toLowerCase()
            .replace(/\s+/g, "-");
          return transformedName === id2;
        }
        return false;
      });

      if (idDataCard) {
        setCardDetail(idDataCard);
      } else {
        // console.error("No matching card found for id2:", id2);
      }
    } else {
      // console.error("No matching package found for id:", id);
    }
  }, [id, id2, pack]);
  const handleOptionClick = (id) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(id)
        ? prevSelectedOptions.filter((optionId) => optionId !== id)
        : [...prevSelectedOptions, id]
    );
  };

  const totalPrice = useMemo(() => {
    return selectedOptions.reduce((total, optionId) => {
      const option = options.find((opt) => opt.id === optionId);
      return total + (option ? option.price : 0);
    }, 0);
  }, [selectedOptions]);

  const cardTotal = Number(cardDetails?.packagePrice) + totalPrice;

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

  useEffect(() => {
    const selectedFasDelivery = selectedItems.find(
      (item) => item.title === "Extra fast"
    );
    if (selectedFasDelivery?.title === "Extra fast") {
      setDeliTime(1);
    } else {
      setDeliTime(cardDetails?.deliveryTime);
    }
  }, [selectedItems]);
  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.userName.value;

    const email = e.target.email.value;
    const password = e.target.password.value;
    const phoneNumber = e.target.phoneNum.value;

    // console.log(displayName);
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
          phoneNumber: phoneNumber || "number is not given",
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
      <form onSubmit={handleRegister} className="mx-5">
        <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%]   sm:mx-auto flex items-start sm:items-center  justify-start sm:justify-center py-3 sm:py-10  ">
          <div className="sm:flex items-center justify-center gap-x-4 pr-4 hidden ">
            <div className="text-regular text-white font-sf-bold border-2 border-dark-green   w-10 h-10 flex items-center justify-center text-center rounded-full">
              <h1 className=" w-8 h-8 border rounded-full bg-dark-green flex items-center justify-center text-center text-atlantis-green">
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
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="2xl:w-[1400px] xl:w-[90%] w-[100%] flex justify-center sm:mx-auto ">
          {cardDetails ? (
            //--------------------------------------------------------------------GROUND SILVER PACKAGE SECTION-------------------------------------------///
            <div className="border-2 border-dark-green rounded-2xl p-12 my-10 ">
              <div>
                <h2 className=" font-bold sm:mb-2 text-regular sm:text-sub-header-2 text-dark-green font-sf-bold">
                  Billing Information
                </h2>
                <p className="mb-6 text-minimum  sm:text-regular font-sf-regular text-dark-green border-b-2 pb-2 sm:py-2 border-dark-green">
                  Your invoice will be issued according to the details.
                </p>
              </div>
              <div className="flex justify-center flex-col sm:flex-row gap-12 ">
                <div className="2xl:w-[55%] w-[100%]">
                  <div>
                    {/* Name and Surname */}
                    <div>
                      <label className="block text-sm font-medium text-dark-green font-sf-regular ">
                        Your name and surname
                      </label>
                      <input
                        required
                        type="text"
                        name="userName"
                        className={`mt-1 block w-full px-3 py-2 border border-dark-green rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 bg-white placeholder:text-dark-green ${
                          user ? "cursor-auto" : ""
                        }`}
                        placeholder={user ? user.displayName : ""}
                        readOnly={user ? true : false}
                      />
                    </div>
                    <div>
                      {/* Email Address */}
                      <div>
                        <label className="block text-sm font-medium text-dark-green font-sf-regular ">
                          Your email address (we will send your login
                          information here)
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className={`mt-1 focus:shadow-outline placeholder:text-dark-green block w-full px-3 py-2 border border-dark-green rounded-md  focus:outline-none focus:ring  bg-white ${
                            user ? "cursor-auto" : ""
                          }`}
                          placeholder={user ? user.email : ""}
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
                              className={`mt-1 block sm:w-full w-full border-dark-green px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 bg-white placeholder-dark-green ${
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
                          className={`mt-1 block w-full sm:w-full outline-none border-dark-green px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 bg-white placeholder-dark-green ${
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
                  {/* --------------------------------UPGRADE SECTION ADDING ADITIONAL----------------------------------------- */}
                  <div className=" sm:mx-0">
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
                  </div>
                </div>

                {/*---------------------------------------------------------------------CHECKOUT CARD && PAYMENT METHOD ----------------------------------------------------------- */}

                <div className="2xl:w-[40%] xl:w-[40%]  sm:mx-0">
                  <div className=" border-2 border-dark-green rounded-lg ">
                    {/* Header Section */}
                    <div className="bg-[#f2f2f2] px-8 py-6 rounded-t-lg">
                      <h2 className="text-sub-header-2 text-dark-green font-sf-bold">
                        {cardDetails.pcakageName}
                      </h2>
                      <p className="text-dark-green font-sf-regular text-minimum">
                        Perfect for startups and growing businesses
                      </p>
                      <p className="text-sub-header-1 font-sf-bold text-dark-green">
                        $ {cardDetails.packagePrice}
                      </p>
                    </div>
                    {/* Features List */}
                    <ul className=" space-y-2 px-8 py-4">
                      {cardDetails.packageFetured1 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured1}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured2 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured2}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured3 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured3}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured4 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured4}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured5 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured5}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured6 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured6}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured7 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured7}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured8 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured8}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured9 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured9}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured10 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured10}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured11 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured11}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}
                      {cardDetails.packageFetured12 ? (
                        <div className="flex items-center gap-2 py-2">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          <h1 className="text-minimum font-sf-regular">
                            {cardDetails.packageFetured12}
                          </h1>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* <div className="flex items-center gap-2 py-2">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                        <h1 className="text-minimum font-sf-regular">
                          {card1.packageFetured6}
                        </h1>
                      </div> */}
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
                                      <span>${item?.price}</span>
                                    </h1>
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-between border-t border-dark-green border-dashed py-2 text-regular-lite font-sf-semibold">
                                <h1>Total</h1>
                                <h1>${totalPrice}</h1>
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
                          {deliTime} days
                        </span>
                      </div>

                      {/* Promo Code Input */}
                      <div className="my-4">
                        <label className="block text-gray-700">
                          Enter promo code
                        </label>
                        <input
                          type="text"
                          className="mt-1 outline-none block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                          placeholder=""
                        />
                      </div>

                      {/* Total Amount */}
                      <div className="flex justify-between font-bold text-regular mb-6">
                        <span>Total</span>$ {cardTotal}
                      </div>

                      {/* Confirm and Pay Button */}
                      {!user && (
                        <button className="w-full bg-dark-green text-atlantis-green py-3 rounded-lg text-tab-sub-header-2 font-sf-bold  hover:bg-green-700">
                          Confirm & Pay
                        </button>
                      )}
                      {user && (
                        <button
                          className="w-full bg-dark-green text-atlantis-green py-3 rounded-lg text-tab-sub-header-2 font-sf-bold  hover:opacity-80  flex justify-evenly items-center"
                          type="button"
                          onClick={handleSignInClick}
                        >
                          Continue <FaArrowRight />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Default Content</div>
          )}
        </div>
      </form>
      {isModalOpen && (
        <CustomPackageModal
          onClose={() => setIsModalOpen(false)}
          id={_id}
          card1Price={cardTotal}
          selectedItems={selectedItems}
          deliveryTime={deliTime}
        >
          <h2>Payment Method</h2>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </CustomPackageModal>
      )}
    </>
  );
};

export default CustomPackageCheckOut;
