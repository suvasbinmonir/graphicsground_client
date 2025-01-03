import "./FeturedSection.css";
import Slider from "react-slick";
import useLogos from "../../../hooks/useLogos";
import FeturedDesign from "../../Shared/FeturedDesign/FeturedDesign";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useScrollToTop from "../../../hooks/useScrollToTop ";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const [click, setClick] = useState(true);
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

let click = SampleNextArrow;

const FeturedSection = () => {
  useScrollToTop();
  const [logos] = useLogos();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] sm:mx-auto cursor-pointer mx-5">
      <div>
        <h1 className="text-regular font-sf-bold text-atlantis-green">
          Fetured Logo
        </h1>
        {/* <div className="dropdown py-2 pb-10 ">
          <div tabIndex={0} role="button" className="font-sf-semibold">
            <span className=" font-sf-regular text-[#999999]"> Sort By:</span>{" "}
            Latest
            <FontAwesomeIcon icon={faChevronDown} className="pl-1  w-3" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-md z-[1] w-52 p-2 shadow-2xl gap-y-2   "
          >
            <Link className="text-minimum font-sf-regular">Most viewed</Link>
            <Link className="text-minimum font-sf-regular">
              Price: Low to High
            </Link>
            <Link className="text-minimum font-sf-regular">
              Price: High to Low
            </Link>
          </ul>
        </div> */}
      </div>
      <div className="slider-container  mx-auto ">
        <Slider {...settings}>
          {logos.map((item) => (
            <FeturedDesign key={item._id} item={item}></FeturedDesign>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeturedSection;
