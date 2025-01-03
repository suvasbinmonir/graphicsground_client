import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import rvImg2 from "./images/image.png";
import rvImg from "./images/image2.png";
import rvImg4 from "./images/image3.png";
import rvImg3 from "./images/images_1.png";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation, useParams } from "react-router-dom";
// import img from "./cl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowDown,
  faCheck,
  faChevronDown,
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "@smastrom/react-rating/style.css";
import ReactStarsRating from "react-awesome-stars-rating";
import "./CustomPackage.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import useScrollToTop from "../../../hooks/useScrollToTop ";
import usePackage from "../../../hooks/usePackage";
import TestimonialDesing from "../../Testimonial/TestimonialDesing/TestimonialDesing";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const CustomPackage = () => {
  useScrollToTop();
  const { id } = useParams();
  // console.log(id);

  const [pack] = usePackage();
  const fixedDivRef = useRef(null);
  const targetDivRef = useRef(null);
  const [packDt, setPackDt] = useState(); // Set default as 'null' for proper condition checks
  const [isFixed, setIsFixed] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (pack.length > 0) {
      const foundId = pack.find(
        (dt) => dt.title.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
      );
      setPackDt(foundId);
    }
  }, [pack, id]);
  // console.log(packDt, 'hahahhahahhahahhah')
  const {
    _id,
    title,
    img,
    desTitle1,
    desTitle2,
    desTitle3,
    details2,
    packageImg,
    features,
    price,
    cardFeatures,
    card1,
    card2,
    card3,
  } = packDt || {};

  useEffect(() => {
    const handleScroll = () => {
      const targetDivTop = targetDivRef.current.getBoundingClientRect().top;

      // If the TargetDiv is at the top of the viewport or above, make the FixedDiv fixed
      if (targetDivTop <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false, // Prevent pause on focus
    pauseOnDotsHover: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  }

  const [activeFAQ, setActiveFAQ] = useState(null); // Initialize as null

  const handleToggle = (faqIndex) => {
    // If the clicked FAQ is already active, collapse it by setting activeFAQ to null
    if (activeFAQ === faqIndex) {
      setActiveFAQ(null);
    } else {
      setActiveFAQ(faqIndex);
    }
  };
  const StarDrawing = (
    <path
      d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
        c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
        c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
        c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
        c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
        C426.818,168.817,420.858,143.814,398.799,141.794z"
    />
  );

  const customStyles = {
    itemShapes: StarDrawing,
    activeFillColor: " #002626",
    inactiveFillColor: "#CCCCCC",
  };

  //--------------On scroll fixed an relative------------------- //
  const divRef = useRef(null); // The div that should become fixed
  const fixedRef = useRef(null); // The target div where fixing starts
  const startRef = useRef(null); // The target div where scrolling resumes
  const [style, setStyle] = useState({});
  //--------------On scroll fixed an relative------------------- //
  const divRef2 = useRef(null); // The div that should become fixed
  const fixedRef2 = useRef(null); // The target div where fixing starts
  const startRef2 = useRef(null); // The target div where scrolling resumes
  const [style2, setStyle2] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const divElement = divRef.current;
      const fixedElement = fixedRef.current;
      const startElement = startRef.current;

      if (divElement && fixedElement && startElement) {
        const divRect = divElement.getBoundingClientRect();
        const fixedRect = fixedElement.getBoundingClientRect();
        const startRect = startElement.getBoundingClientRect();

        // Fix the div when it reaches the fixed target
        if (fixedRect.top <= 0 && startRect.top > 0) {
          setStyle({
            position: "fixed",
            top: "0",
            right: "0",
            marginRight: "120px",
          });
        }
        // Reset to normal flow when the div reaches the start target
        else if (startRect.top <= divRect.height) {
          setStyle({
            position: "relative",
            top: "0",
          });
        }
        // Otherwise, let it scroll normally
        else {
          setStyle({
            position: "relative",
            top: "0",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const divElement2 = divRef2.current;
      const fixedElement2 = fixedRef2.current;
      const startElement2 = startRef2.current;

      if (divElement2 && fixedElement2 && startElement2) {
        const divRect2 = divElement2.getBoundingClientRect();
        const fixedRect2 = fixedElement2.getBoundingClientRect();
        const startRect2 = startElement2.getBoundingClientRect();

        // Fix the div when it reaches the fixed target
        if (fixedRect2.top <= 0 && startRect2.top > 0) {
          setStyle2({
            position: "fixed",
            top: "0",

            backgroundColor: "#002626",
            width: "877px",
            color: "white",
            padding: "20px 10px",
          });
        }
        // Reset to normal flow when the div reaches the start target
        else if (startRect2.top <= divRect2.height) {
          setStyle2({
            position: "relative",
            top: "0",
          });
        }
        // Otherwise, let it scroll normally
        else {
          setStyle2({
            position: "relative",
            top: "0",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosPublic.get("/review");
        setReviews(response.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);
  const readyMade = reviews.filter(
    (item) => item.category === "Ready-made logo service"
  );
  const custom = reviews.filter(
    (item) => item.category === "Custom logo service"
  );
  const brand = reviews.filter(
    (item) => item.category === "Brand guideline service"
  );
  const packaging = reviews.filter(
    (item) => item.category === "Packaging service"
  );
  const imgToVector = reviews.filter(
    (item) => item.category === "Image to vector service"
  );
  return (
    <div>
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                           CUSTOM PACKAGE REDESIGN                                                                    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------  */}

      <div className="2xl:w-[1400px] xl:w-[90%]  mx-auto overflow-hidden">
        <div>
          {/*---------------------------------------- 
                       HEADER SECTION
        ---------------------------------------------  */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-20">
            <div className="1/2 mx-5 xm:mx-0">
              <h1 className="text-tab-sub-header-1 sm:text-header font-sf-bold text-dark-green sm:leading-[70px] ">
                {title} &nbsp; service for your buisness
              </h1>
              <h1 className="text-sm sm:text-minimum font-sf-regular text-dark-green my-4">
                {details2}
              </h1>
              <div className=" font-sf-lite pb-8">
                <h1 className="text-dark-green font-sf-bold text-[19px] pt-4">
                  What you get
                </h1>
                <h1 className="text-sm sm:text-minimum  text-dark-green pt-2 sm:pt-3">
                  <FontAwesomeIcon className=" pr-2 w-3" icon={faCircleCheck} />{" "}
                  No templates or clip art, only custom designs.
                </h1>
                <h1 className="text-sm sm:text-minimum  text-dark-green pt-2">
                  <FontAwesomeIcon className=" pr-2 w-3" icon={faCircleCheck} />{" "}
                  Full copyright ownership.
                </h1>
                <h1 className="text-sm sm:text-minimum  text-dark-green pt-2">
                  <FontAwesomeIcon className=" pr-2 w-3" icon={faCircleCheck} />{" "}
                  100% money back guarantee
                </h1>
                <h1 className="text-sm sm:text-minimum  text-dark-green pt-2">
                  <FontAwesomeIcon className=" pr-2 w-3" icon={faCircleCheck} />{" "}
                  The original, editable layered files (AI, PSD, EPS)
                </h1>
                <h1 className="text-sm sm:text-minimum  text-dark-green pt-2">
                  <FontAwesomeIcon className=" pr-2 w-3" icon={faCircleCheck} />{" "}
                  Digital print and web files
                </h1>
                <h1 className="text-sm sm:text-minimum  text-dark-green pt-2">
                  <FontAwesomeIcon className=" pr-2 w-3" icon={faCircleCheck} />{" "}
                  Free maintenance up to 30 days
                </h1>
                <h1 className="text-sm sm:text-regular text-dark-green font-sf-bold pt-8 pb-1">
                  Starting from $120
                </h1>
              </div>
              <button className="border w-full bg-dark-green py-2 rounded-full">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("pricing").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  href="#pricing"
                  className="text-regular font-sf-semibold  text-atlantis-green "
                >
                  Get Strated
                </Link>
              </button>
            </div>

            <div className="w-700px mx-5 sm:mx-0">
              <img className="700px" src={img} alt="" />
            </div>
          </section>

          {/*----------------------------------------
                      STPES SECTION  
        ---------------------------------------------*/}
          <section
            id="getStart"
            className="flex flex-col sm:flex-row justify-between gap-x-20"
            ref={targetDivRef}
          >
            <div className=" sm:w-[750px] border-b pb-9   sm:mx-auto">
              <div
                className="border-b pb-2 w-[100vw] sm:w-[750px] overflow-hidden  "
                ref={fixedDivRef}
                style={{
                  position: isFixed ? "fixed" : "static",
                  top: isFixed ? 0 : "auto",
                  width: isFixed && "100vw",
                  boxShadow: isFixed
                    ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    : "",
                  left: 0,
                  backgroundColor: "white",
                  padding: isFixed ? "30px 0px " : "",

                  // marginLeft: isFixed ? "-100px" : "",
                  zIndex: 1000,
                }}
              >
                <div className=" 2xl:w-[1400px]   sm:mx-auto mx-5 ">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("targetSection")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    href="#targetSection"
                    className="text-dark-green font-sf-semibold text-sm sm:text-[19px] pr-4"
                  >
                    How it works
                  </a>
                  <Link
                    className="text-dark-green font-sf-semibold text-sm sm:text-[19px] px-3"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("case")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    href="#case"
                  >
                    Case studies
                  </Link>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("pricing")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    href="#pricing"
                    className="text-dark-green font-sf-semibold text-sm sm:text-[19px] pr-4"
                  >
                    Pricing
                  </Link>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("review")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    href="#review"
                    className="text-dark-green font-sf-semibold text-sm sm:text-[19px] pr-4"
                  >
                    Review
                  </Link>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("faq")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    href="#faq"
                    className="text-dark-green font-sf-semibold text-sm sm:text-[19px] pr-4"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <br />
              <div className="mx-5 sm:mx-0">
                <h1 className="text-dark-green font-sf-bold text-regular sm:text-sub-header-2 py-2">
                  GraphicGround Custom logo service
                </h1>
                <h1
                  className="text-dark-green font-sf-regular text-sm sm:text-minimum border-b pb-9 "
                  id="targetSection"
                >
                  Create a custom logo for your business with our talented
                  in-house logo design team. It is the quality of your logo that
                  determines how long your impression will last. Custom logos
                  incorporate colors, fonts, and imagery that reflect your
                  brand's personality and values
                </h1>
                <div className="pb-2 pt-9">
                  <h1 className="text-sub-header-2 font-sf-bold text-dark-green">
                    How GraphicsGround Custom Logo{" "}
                    <span className="text-atlantis-green">Service Works</span>
                  </h1>
                  <h1 className="text-bold font-sf-regular text-regular-lite sm:text-regular">
                    <span className="text-atlantis-green uppercase font-sf-semibold ">
                      Steps 1:{" "}
                    </span>
                    Fill in the brief
                  </h1>
                  <h1 className="text-sm sm:text-minimum text-dark-green font-sf-regular">
                    Write a design brief including your company or business
                    name, tagline, color preference, business background to
                    better understand your vision
                  </h1>
                </div>
                <div className="py-2">
                  <h1 className="text-bold font-sf-regular text-regular-lite sm:text-regular">
                    <span className="text-atlantis-green uppercase font-sf-semibold ">
                      Steps 2:{" "}
                    </span>
                    Receive design concepts.
                  </h1>
                  <h1 className="text-sm sm:text-minimum text-dark-green font-sf-regular">
                    Sit back and enjoy! We'll submit creative logo concepts to
                    you. You can expect between 4 to unlimited design conepts,
                    depending on your package.
                  </h1>
                </div>
                <div className="py-2">
                  <h1 className="text-bold font-sf-regular text-regular-lite sm:text-regular">
                    <span className="text-atlantis-green uppercase font-sf-semibold ">
                      Steps 3:{" "}
                    </span>
                    Revise your favorite concept.
                  </h1>
                  <h1 className="text-sm sm:text-minimum text-dark-green font-sf-regular">
                    Choose on or two favorite designs to develop further like
                    colors, typography and ideas. Send multiple revision
                    requests as much as you need.
                  </h1>
                </div>
                <div className="py-2">
                  <h1 className="text-bold font-sf-regular text-regular-lite sm:text-regular">
                    <span className="text-atlantis-green uppercase font-sf-semibold ">
                      Steps 4:{" "}
                    </span>
                    Choose the Final version and Own copyright.
                  </h1>
                  <h1
                    className="text-sm sm:text-dark-green text-minimum font-sf-regular"
                    id="case"
                  >
                    It's decision time! Choose your final logo and claim it as
                    your own with the final files and full copyright transfer.
                  </h1>
                </div>
              </div>
            </div>
            <div className="sm:w-[500px] w-full border rounded-lg h-[fit-content] mx-auto sm:mx-0 mt-10 sm:mt-0">
              <div className="bg-[#f2f2f2] py-10 px-6">
                <h1 className="text-dark-green text-sub-header-2 font-sf-bold">
                  Logo Design
                </h1>
                <h1 className="text-dark-green text-minimum font-sf-regular">
                  Get a custom logo you'll love
                </h1>
                <h1 className="text-dark-green text-regular font-sf-bold">
                  Starting from $120
                </h1>
              </div>
              <div className="px-10 py-8">
                <h1 className="text-minium font-sf-regular text-dark-green flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="w-3 pr-2 py-2" />1
                  finished, completely custom logo design
                </h1>
                <h1 className="text-minium font-sf-regular text-dark-green flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="w-3 pr-2 py-2" />{" "}
                  Digital print and web files (RGB, CMYK, PNG, JPG, PDF)
                </h1>
                <h1 className="text-minium font-sf-regular text-dark-green flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="w-3 pr-2 py-2" />
                  The original, editable layered files (AI, PSD EPS)
                </h1>
                <h1 className="text-minium font-sf-regular text-dark-green flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="w-3 pr-2 py-2" />
                  Transparent Logo in .PNG
                </h1>
                <h1 className="text-minium font-sf-regular text-dark-green flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="w-3 pr-2 py-2" />
                  3D Mockup
                </h1>
                <h1 className="text-minium font-sf-regular text-dark-green flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="w-3 pr-2 py-2" />
                  Full copyright ownership
                </h1>
                <br />
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("pricing")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  // href="#pricing"
                  className="text-regular font-sf-bold text-atlantis-green py-1 flex rounded-full bg-dark-green text-center mx-auto  items-center justify-center"
                >
                  Select A Package
                  <FontAwesomeIcon icon={faArrowDown} className="pl-3 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="sm:w-[750px] pt-9 mx-5 sm:mx-0">
          <h1 className="text-regular sm:text-sub-header-2 font-sf-bold text-dark-green py-4">
            Check out custom logo case studies
          </h1>
          <div className="bg-[#f2f2f2] py-4 px-8 rounded-md mt-2">
            <h1 className="text-dark-green font-sf-bold text-minimum">
              My journey with GraphicsGround
            </h1>
            <h1 className="text-sm sm:text-minimum font-sf-regular text-dark-green py-2">
              Within 2 days, I recieved several logo concepts from the team of
              GraphicsGround. They were all unique and captured different
              aspects of my brand identity. Choosing just one was tough, but hte
              designer patiently walked me through the option and helped me
              refine my choice
            </h1>
            <h1
              className="text-lg sm:text-regular text-dark-green font-sf-regular"
              id="pricing"
            >
              April 25, 2024. New York
            </h1>
            <h1
              className="text-atlantis-green font-sf-regular teext-minimum text-start"
              id="pricing"
            >
              Check out detail
            </h1>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------- -------------------SELECT PACKAGE --------------------------------------------- */}
      <section>
        <br />
        <br />
        <div className=" 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] sm:mx-auto mx-5">
          <h1 className="text-regular sm:text-sub-header-2 font-sf-bold  text-dark-green text-start animate-slide-up">
            Simple <span className="text-atlantis-green"> pricing</span>, Single
            time, No hidden cost
          </h1>

          <h1 className="text-minimum font-sf-regular text-dark-green text-left animate-slide-up">
            Choose a package that suits your needs
          </h1>
          <br />
          <br />
          <div className="flex justify-evenly items-baseline flex-col sm:flex-row gap-5 sm:gap-0 mx-auto">
            {/* -----------------CARD:1-----------------------  */}
            <div className="rounded-xl w-[370px] animate-slide-up    h-[650px] border-2 relative">
              <div className="pt-8 pb-5  bg-[#f2f2f2] rounded-t-lg px-10 ">
                <h1 className="text-dark-green font-sf-semibold text-regular ">
                  {card1?.pcakageName}
                </h1>
                <h1 className="text-dark-green font-sf-regular text-minimum py-2 w-[200px]">
                  {card1?.packageTitle}
                </h1>
                <h1 className="text-dark-green font-sf-bold text-sub-header-2">
                  ${card1?.packagePrice}
                </h1>
              </div>
              <div className="px-10 py-5 rounded-2xl rounded-t-none">
                {card1?.packageFetured1 ? (
                  <div className="flex items-center gap-2 py-1 ">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured1}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                <div className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card1?.packageFetured2}
                  </h1>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card1?.packageFetured3}
                  </h1>
                </div>
                {card1?.packageFetured4 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured4}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card1?.packageFetured5 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured5}
                    </h1>
                  </div>
                ) : (
                  " "
                )}
                {card1?.packageFetured6 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured6}
                    </h1>
                  </div>
                ) : (
                  " "
                )}
                {card1?.packageFetured7 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured7}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card1?.packageFetured8 ? (
                  <div className="flex items-center gap-2 py-1 text-[#E6E6E6]">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured8}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card1?.packageFetured9 ? (
                  <div className="flex items-center gap-2 py-1 text-[#E6E6E6]">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured9}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card1?.packageFetured10 ? (
                  <div className="flex items-center gap-2 py-1 text-[#E6E6E6]">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured9}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card1?.packageFetured11 ? (
                  <div className="flex items-center gap-2 py-1 text-[#E6E6E6]">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured9}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card1?.packageFetured12 ? (
                  <div className="flex items-center gap-2 py-1 text-[#E6E6E6]">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card1?.packageFetured9}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                <br />
                <div className=" mx-auto ml-10 pt-8 bottom-0 pb-5   ">
                  <Link
                    to={`/shop/${_id}/${card1?.packageNameId}`}
                    state={{ card1, _id }}
                    className="text-regular text-atlantis-green bg-dark-green font-sf-bold py-2 px-7 rounded-full absolute  bottom-8 "
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
            {/* ---------------------CARD:2--------------------------  */}
            <div className=" rounded-xl w-[370px] animate-slide-up  h-[650px]  border-2 border-atlantis-green relative">
              <div className="py-8  bg-atlantis-green  rounded-t-lg px-10 ">
                <h1 className="text-dark-green font-sf-semibold text-regular ">
                  {card2?.pcakageName}
                </h1>
                <h1 className="text-dark-green font-sf-regular text-minimum py-2 w-[200px]">
                  {card2?.packageTitle}
                </h1>
                <h1 className="text-dark-green font-sf-bold text-sub-header-2">
                  ${card2?.packagePrice}
                </h1>
              </div>
              <div className="px-10 py-5  rounded-b-xl">
                <div className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card2?.packageFetured1}
                  </h1>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card2?.packageFetured2}
                  </h1>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card2?.packageFetured3}
                  </h1>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card2?.packageFetured4}
                  </h1>
                </div>
                {card2?.packageFetured5 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card2?.packageFetured5}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card2?.packageFetured6 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card2?.packageFetured6}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card2?.packageFetured7 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card2?.packageFetured7}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card2?.packageFetured8 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card2?.packageFetured8}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card2?.packageFetured9 ? (
                  <div className="flex items-center gap-2 py-1 text-dark-green]">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card2?.packageFetured9}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                <div className="mx-auto ml-10 py-5 ">
                  <Link
                    to={`/shop/${_id}/${card2?.packageNameId}`}
                    className="text-regular text-dark-green bg-atlantis-green font-sf-bold py-2 px-7 rounded-full absolute bottom-8"
                    state={{ card2, _id }}
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>

            {/* ----------CARD:3------------- */}
            <div className="  w-[370px]  relative border-2 rounded-xl h-[650px]">
              <div className="py-8  bg-[#f2f2f2] rounded-t-xl px-10 ">
                <h1 className="text-dark-green font-sf-semibold text-regular ">
                  {card3?.pcakageName}
                </h1>
                <h1 className="text-dark-green font-sf-regular text-minimum py-2">
                  {card3?.packageTitle}
                </h1>
                <h1 className="text-dark-green font-sf-bold text-sub-header-2">
                  ${card3?.packagePrice}
                </h1>
              </div>
              <div className="px-10 py-5 rounded-b-xl ">
                <div className="flex items-center gap-2 py-1 ">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card3?.packageFetured1}
                  </h1>
                </div>
                <div className="flex items-center gap-2 py-21">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card3?.packageFetured2}
                  </h1>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  <h1 className="text-minimum font-sf-regular">
                    {card3?.packageFetured3}
                  </h1>
                </div>
                {card3?.packageFetured4 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card3?.packageFetured4}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card3?.packageFetured5 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card3?.packageFetured5}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card3?.packageFetured6 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card3?.packageFetured6}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card3?.packageFetured7 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card3?.packageFetured7}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card3?.packageFetured8 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card3?.packageFetured8}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card3?.packageFetured9 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card3?.packageFetured9}
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                {card3?.packageFetured10 ? (
                  <div className="flex items-center gap-2 py-1">
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    <h1 className="text-minimum font-sf-regular">
                      {card3?.packageFetured10}
                    </h1>
                  </div>
                ) : (
                  ""
                )}

                <div className="mx-auto ml-10 pt-10 pb-5 mb-12 ">
                  <Link
                    to={`/shop/${_id}/${card3?.packageNameId}`}
                    state={{ card3, _id }}
                    className="text-regular text-atlantis-green bg-dark-green font-sf-bold py-2 px-7 rounded-full absolute bottom-8"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="review"></div>
      <br />
      {/* ---------------------------REVIEW SECTION-------------------------   */}
      <br />
      <br />
      <section ref={startRef2}>
        <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-5 sm:mx-auto  my-14   pb-4">
          <div className="">
            <h1 className="text-dark-green font-sf-bold text-regular sm:text-sub-header-2 flex items-center ">
              150+ reviews | 5 stars
              <ReactStarsRating
                value={4.5}
                // style={{text}}
                className="flex pl-3 text-dark-green"
                isEdit={false}
              />
            </h1>
            <h1 className="text-dark-green font-sf-regular text-start text-sm sm:text-minimum pb-4">
              Our lit of verifid reviews from clients is constantly growing. No
              changes have been made to the reviews.
            </h1>
          </div>
          {/* ----------------RIVIEW-----------  */}
          {/* <div className="flex items-end justify-evenly border-b ">
            <div className="py-8 w-[80%]">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex-shrink-0">
                  <h1 className="text-white text-regular-lite mx-auto flex items-center justify-center pt-2 font-sf-bold">
                    MS
                  </h1>
                </div>

                <div className="ml-4">
                  <h2 className="text-minimum font-sf-bold text-atlantis-green">
                    Mateus Silva
                  </h2>
                  <p className="text-sm text-dark-green font-sf-regular">
                    Brazil &nbsp; |
                  </p>
                </div>

                <div className="pt-10  -ml-0 -mt-4">
                  <span className="inline-block border rounded-full bg-white text-dark-green  text-xs px-2  ">
                    Custom Logo
                  </span>
                </div>
              </div>

              <div className="flex items-center mt-2">
                <ReactStarsRating value={5} className="flex" isEdit={false} />

                <span className="ml-2 text-minimum font-sf-regular text-dark-green">
                  5
                </span>
                <span className="mx-2 text-dark-green">·</span>
                <span className="text-dark-green text-minimum font-sf-regular">
                  13 Day ago
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-minimum text-dark-green font-sf-regular">
                "I needed a logo urgently, and this ready-made option was a
                lifesaver! The design was unique, high-quality, and perfectly
                suited for my brand. I made the purchase, and the files were
                available for download right away. Couldn’t be easier!"
              </p>
            </div>
            <div className="w-[25%] flex justify-end">
              <div
                className=" w-[190px]   flex justify-center
                 items-center  rounded-lg mb-6"
              >
                <img className="rounded-lg border" src={rvImg4} alt="" />
              </div>
            </div>
          </div> */}
          {(() => {
            if (id === "custom-logo-design") {
              return custom.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ));
            } else if (id === "brand-style-guide") {
              return brand.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ));
            } else if (id === "packaging-design") {
              return packaging.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ));
            } else if (id === "image-to-vector") {
              return imgToVector.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ));
            } else {
              return <p>No testimonials available for this category.</p>;
            }
          })()}

          <br />
        </div>
        <div className="flex justify-center -mt-7">
          <Link
            to={"/testimonial"}
            className="bg-atlantis-green text-dark-green font-sf-semibold text-retular px-8 py-2 rounded-full hover:animate-pop"
          >
            See More
          </Link>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-5">
          <h1 className="text-regular sm:text-sub-header-2 font-sf-bold text-dark-green sm:py-12  text-start ">
            Frequently Asked Questions
          </h1>
          <Accordion>
            {/*----------------- first faq -------- */}
            <AccordionItem
              className="border-b  pb-6 my-5 py-2 "
              onClick={() => handleToggle(1)}
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-regular-lite sm:text-regular font-sf-regular  py-2 flex justify-between">
                  Does my business need a custom logo?
                  <FontAwesomeIcon
                    icon={activeFAQ === 1 ? faChevronDown : faChevronRight}
                  />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={`text-minimum font-sf-regular  py-2 ${
                  activeFAQ === 1 ? "block" : "hidden"
                }`}
              >
                <p>
                  Yes, of course! Creating a custom logo is the first step in
                  building a strong brand identity. This is one of the most
                  important design decisions you will make. Getting a customized
                  logo for your business can transform your brand to the next
                  level, no matter how big or small it is.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/*----------------- second faq -------- */}
            <AccordionItem
              className="border-b  pb-6 my-5 py-2 "
              onClick={() => handleToggle(2)}
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-regular-lite sm:text-regular font-sf-regular py-2 flex justify-between">
                  What is custom logo design and what will I get?
                  <FontAwesomeIcon
                    icon={activeFAQ === 2 ? faChevronDown : faChevronRight}
                  />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={`text-minimum font-sf-regular  py-2 ${
                  activeFAQ === 2 ? "block" : "hidden"
                }`}
              >
                <p>
                  There are no template logos here! Our in-house designers
                  design each logo and sell only once. Upon completion of your
                  project, you'll receive all the files you need to use your
                  logo on both web and print media. It includes vector files as
                  well as a preview file for the web, such as a JPG or PNG. Of
                  course, you also get full ownership of the design.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/*----------------- third faq -------- */}
            <AccordionItem
              className="border-b  pb-6 my-5 py-2"
              onClick={() => handleToggle(3)}
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-regular-lite sm:text-regular font-sf-regular py-2 flex justify-between">
                  Will I own the copyright to my logo design?
                  <FontAwesomeIcon
                    icon={activeFAQ === 3 ? faChevronDown : faChevronRight}
                  />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={`text-minimum font-sf-regular  py-2 ${
                  activeFAQ === 3 ? "block" : "hidden"
                }`}
              >
                <p>
                  Yes, the copyright ownership will be transferred to you
                  automatically upon the approval of the design.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/*----------------- fourth faq -------- */}
            <AccordionItem
              className="border-b  pb-6 my-5 py-2 "
              onClick={() => handleToggle(4)}
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-regular-lite sm:text-regular font-sf-regular  py-2 flex justify-between">
                  What is Vector/source Files?
                  <FontAwesomeIcon
                    icon={activeFAQ === 4 ? faChevronDown : faChevronRight}
                  />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={`text-minimum font-sf-regular  py-2 ${
                  activeFAQ === 4 ? "block" : "hidden"
                }`}
              >
                <p>
                  Source/Vector files are the editable versions of the logo
                  design. Generally, it can be opened from Adobe Illustrator,
                  which are highly scalable and used for editing & printing
                  purposes without quality loss.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/*----------------- fifth faq -------- */}
            <AccordionItem
              className="border-b  pb-6 my-5 py-2 "
              onClick={() => handleToggle(5)}
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-regular-lite sm:text-regular font-sf-regular py-2 flex justify-between">
                  What information do you need? How do I send you my project
                  information?
                  <FontAwesomeIcon
                    icon={activeFAQ === 5 ? faChevronDown : faChevronRight}
                  />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={`text-minimum font-sf-regular  py-2 ${
                  activeFAQ === 5 ? "block" : "hidden"
                }`}
              >
                <p>
                  After placing an order, you have an opportunity to provide all
                  the information about your business and the logo design
                  project. There is a questionnaire we have designed that
                  requests all the information for a great end result.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CustomPackage;
