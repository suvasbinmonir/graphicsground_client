import useScrollToTop from "../../../hooks/useScrollToTop ";
import "./HomeBanner.css";
import checkMark from "/check-mark.png";
import bg from "/header-bg.png";
import icon1 from "./image/icon1.svg";
import icon2 from "./image/icon2.svg";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

const HomeBanner = () => {
  useScrollToTop();
  return (
    <div
      className="flex justify-center transform transition-all duration-700 ease-in-out animate-fade-in"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="xl:w-[90%] 2xl:w-[1400px] lg:w-[90%] sm:pt-5 2xl:h-[435px] xl:h-[300px] lg:h-[270px]">
        <div className="flex sm:justify-between flex-col sm:flex-row mx-5 sm:mx-0 animate-slide-up pt-8  pb-12">
          <div>
            <div>
              <h1 className="2xl:text-header xl:text-header lg:text-tab-header text-tab-sub-header-1 text-dark-green p-0 font-sf-bold animate-slide-up">
                Buy a <span className="text-atlantis-green">ready-made</span>{" "}
                logo
              </h1>
              <h1 className="font-sf-regular 2xl:text-regular xl:text-regular lg:text-regular-lite text-[17px] animate-fade-in">
                It can be used anywhere, anytime, for any purpose. Copyright is
                yours.
              </h1>
            </div>
            <div className="flex justify-between pb-[22px]">
              <div className="pt-5">
                <ul className="font-sf-minimum ">
                  {[
                    "The logo will be sold once, It's gone.",
                    "Hand-selected design only.",
                    "You won't find quality like this anywhere else",
                    "We'll show you previews first.",
                    "Copyright transfer to buyer.",
                    "Crystal clear money-back guarantee.",
                  ].map((item, index) => (
                    <div
                      className="flex animate-slide-up delay-100"
                      key={index}
                    >
                      <img
                        className="self-center"
                        width={"12px"}
                        src={checkMark}
                      />
                      <li className="pl-2 mb-1">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end mt-5">
            <div className="flex justify-between py-6 sm:justify-end sm:gap-x-5">
              <div className="bg-dark-green py-3 pl-3 sm:p-3 rounded-xl hover:scale-105 transition-all animate-pop w-full">
                <Link>
                  <div className="flex flex-col gap-2">
                    <div className="flex sm:gap-3 items-center ">
                      <img
                        className="w-7 pr-1 sm:pl-0 sm:w-full"
                        src={icon1}
                        alt=""
                      />
                      <div>
                        <div className="flex items-center animate-pop">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-[#FF492C] w-4 h-4 sm:w-6 sm:h-6 p-0.5"
                            />
                          ))}
                          <h1 className="text-[#FF492C] text-minimum font-sf-regular">
                            4.8/5
                          </h1>
                        </div>
                        <div>
                          <h1 className="text-white text-start font-sf-regular text-xs sm:text-minimum">
                            From 110+ reviews
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="bg-dark-green py-3 pl-3 sm:p-3 rounded-lg sm:rounded-xl hover:scale-105 transition-all animate-pop w-full ml-2">
                <Link>
                  <div className="flex flex-col">
                    <div className="flex gap-2 sm:gap-3 items-center">
                      <img src={icon2} alt="" className="w-7 sm:w-full" />
                      <div>
                        <div className="flex gap-1 items-center animate-pop">
                          {[...Array(5)].map((_, i) => (
                            <IoStarSharp
                              key={i}
                              className="text-white bg-[#04DA8D] w-3 h-3 sm:w-6 sm:h-6 p-0.5"
                            />
                          ))}
                          <h1 className="text-[#04DA8D] text-sm sm:text-minimum pt-1">
                            4.9/5
                          </h1>
                        </div>
                        <div>
                          <h1 className="text-white text-start sm:text-minimum font-sf-regular text-sm">
                            From 50+ reviews
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col text-center sm:text-end sm:items-end">
              <h1 className="2xl:text-sub-header-1 xl:text-sub-header-2 lg:text-tab-sub-header-2 font-sf-bold text-atlantis-green text-[28px] animate-slide-up -mt-2">
                The moment it sells, it's gone!
              </h1>
              <h1 className="font-sf-regular 2xl:text-regular xl:text-regular-lite font-regular 2xl:-mt-2 mb-3 sm:mb-5">
                The logos are handpicked by our dedicated team
              </h1>
              <button
                className="font-sf-bold border sm:w-fit w-52 mx-auto sm:mx-0 mb-5 border-atlantis-green 
            text-dark-green bg-atlantis-green rounded-full px-5 py-1 2xl:text-regular xl:text-regular-lite 
            lg:text-tab-regular  hover:scale-105 transition-all"
              >
                Browse Free Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
