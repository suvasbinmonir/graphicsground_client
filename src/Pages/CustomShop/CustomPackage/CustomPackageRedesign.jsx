import { Link } from "react-router-dom";
import img from "./cl.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const CustomPackageRedesign = () => {
  return (
    <div className="2xl:w-[1400px] xl:w-[90%]  mx-auto">
      <div>
        {/*---------------------------------------- 
                       HEADER SECTION
        ---------------------------------------------  */}
        <section className="grid grid-cols-2 gap-10 py-20">
          <div className="1/2">
            <h1 className="text-header font-sf-bold text-dark-green">
              Custom <span className="text-atlantis-green">Logo</span> Design
              Service
            </h1>
            <h1 className="text-regular-lite font-sf-regular text-dark-green my-2">
              Create a custom logo for your business with our talented in-house
              logo design team. It is the quality of your logo that determines
              how long your impression will last. Custom logos incorporate
              colors, fonts, and imagery that reflect your brand's personality
              and values
            </h1>
            <div className=" font-sf-regular pb-8">
              <h1 className="text-regular-lite  text-dark-green pt-2">
                <FontAwesomeIcon className=" pr-2 w-4" icon={faCircleCheck} />{" "}
                No templates or clip art, only custom designs.
              </h1>
              <h1 className="text-regular-lite  text-dark-green pt-2">
                <FontAwesomeIcon className=" pr-2 w-4" icon={faCircleCheck} />{" "}
                Full copyright ownership.
              </h1>
              <h1 className="text-regular-lite  text-dark-green pt-2">
                <FontAwesomeIcon className=" pr-2 w-4" icon={faCircleCheck} />{" "}
                100% money back guarantee
              </h1>
              <h1 className="text-regular-lite  text-dark-green pt-2">
                <FontAwesomeIcon className=" pr-2 w-4" icon={faCircleCheck} />{" "}
                The original, editable layered files (AI, PSD, EPS)
              </h1>
              <h1 className="text-regular-lite  text-dark-green pt-2">
                <FontAwesomeIcon className=" pr-2 w-4" icon={faCircleCheck} />{" "}
                Digital print and web files
              </h1>
              <h1 className="text-regular-lite  text-dark-green pt-2">
                <FontAwesomeIcon className=" pr-2 w-4" icon={faCircleCheck} />{" "}
                Free maintenance up to 30 days
              </h1>
            </div>
            <Link
              to="/"
              className="text-regular font-sf-semibold py-2 px-10 rounded-full bg-dark-green text-atlantis-green "
            >
              Get Strated
            </Link>
          </div>

          <div className="w-700px">
            <img className="700px" src={img} alt="" />
          </div>
        </section>

        {/*----------------------------------------
                      STPES SECTION  
        ---------------------------------------------*/}
        <section className="flex justify-between gap-x-20">
          <div className="w-[750px]">
            <div className="border-b border-black">
              <Link
                className="text-dark-green font-sf-semibold text-regular pr-4"
                to="/"
              >
                How it works
              </Link>
              <Link
                className="text-dark-green font-sf-semibold text-regular px-3"
                to="/"
              >
                Case studies
              </Link>
              <Link
                className="text-dark-green font-sf-semibold text-regular px-3"
                to="/"
              >
                Pricing
              </Link>
              <Link
                className="text-dark-green font-sf-semibold text-regular px-3"
                to="/"
              >
                Review
              </Link>
              <Link
                className="text-dark-green font-sf-semibold text-regular pl-3"
                to="/"
              >
                FAQ
              </Link>
            </div>
            <br />
            <div>
              <h1 className="text-dark-green font-sf-bold text-sub-header-1 py-2">
                How GraphicGround Custom logo services work
              </h1>
              <div className="py-2">
                <h1 className="text-boldfont-sf-regular text-regular">
                  <span className="text-atlantis-green uppercase">
                    Steps 1:{" "}
                  </span>
                  Fill in the brief
                </h1>
                <h1 className="text-minimum text-dark-green font-sf-regular">
                  Write a design brief including your company or business name,
                  tagline, color preference, business background to better
                  understand your vision
                </h1>
              </div>
              <div className="py-2">
                <h1 className="text-boldfont-sf-regular text-regular">
                  <span className="text-atlantis-green uppercase">
                    Steps 2:{" "}
                  </span>
                  Receive design concepts.
                </h1>
                <h1 className="text-minimum text-dark-green font-sf-regular">
                  Sit back and enjoy! We'll submit creative logo concepts to
                  you. You can expect between 4 to unlimited design conepts,
                  depending on your package.
                </h1>
              </div>
              <div className="py-2">
                <h1 className="text-boldfont-sf-regular text-regular">
                  <span className="text-atlantis-green uppercase">
                    Steps 3:{" "}
                  </span>
                  Revise your favorite concept.
                </h1>
                <h1 className="text-minimum text-dark-green font-sf-regular">
                  Choose on or two favorite designs to develop further like
                  colors, typography and ideas. Send multiple revision requests
                  as much as you need.
                </h1>
              </div>
              <div className="py-2">
                <h1 className="text-boldfont-sf-regular text-regular">
                  <span className="text-atlantis-green uppercase">
                    Steps 4:{" "}
                  </span>
                  Choose the Final version and Own copyright.
                </h1>
                <h1>
                  It's decision time! Choose your final logo and claim it as
                  your own with the final files and full copyright transfer.
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[500px] border rounded-lg h-[fit-content] ">
            <div className="bg-[#f2f2f2] py-10 px-6">
              <h1 className="text-dark-green text-sub-header-2 font-sf-bold">
                Logo Design
              </h1>
              <h1 className="text-dark-green text-minimum font-sf-regular">
                Get a custom logo you'll love
              </h1>
              <h1 className="text-dark-green text-sub-header-2 font-sf-bold">
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
                to={"/"}
                className="text-sub-header-2 font-sf-bold text-atlantis-green py-1 flex rounded-full bg-dark-green text-center mx-auto justify-center"
              >
                Select A Package
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomPackageRedesign;
