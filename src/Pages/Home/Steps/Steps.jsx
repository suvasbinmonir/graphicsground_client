import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Steps.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CustomShopTitle from "../../Shared/CustomShopTitle/CustomShopTitle";
import useScrollToTop from "../../../hooks/useScrollToTop ";
const Steps = () => {
  useScrollToTop();
  return (
    <div className="flex justify-center  mx-3 sm:mx-0">
      <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%]">
        <h1 className="text-regular   sm:text-sub-header-2 font-sf-bold text-dark-green">
          Ready-made logos, Pre-designed logos, or Pre-made logos?
        </h1>
        <h1 className="pt-2 text-atlantis-green text-regular-lite sm:text-regular font-sf-regular">
          These are all the same:
        </h1>
        <ul className="pt-2">
          <li className="text-dark-green   sm:text-minimum  font-sf-regular flex items-center">
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px" }} />
            &nbsp;Ready-made logos (and all its spelling variations)
          </li>
          <li className="text-dark-green   sm:text-minimum  font-sf-regular flex items-center">
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px" }} />
            &nbsp;Pre-designed logos
          </li>
          <li className="text-dark-green   sm:text-minimum  font-sf-regular flex items-center">
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px" }} />
            &nbsp;Pre-made logos
          </li>
          <li className="text-dark-green   sm:text-minimum  font-sf-regular flex items-center">
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px" }} />
            &nbsp;Stock Logos
          </li>
        </ul>
        <h1 className="text-dark-green text-minimum font-sf-regular pt-2">
          This is what we do here at graphicsGround. Orginal, awesome logos are
          looking for a new home.
        </h1>
        <h1 className="text-regular sm:text-sub-header-2 font-sf-bold pt-10">
          How <span className="text-dark-green">Graphics</span>Ground Works
        </h1>
        <h1 className="text-dark-green text-minimum font-sf-regular ">
          {" "}
          Original, trademarkable logos for sale, each one sold only once. Free
          customization is included in the price of the logo.
        </h1>
        <h1 className="text-regular-lite sm:text-regular font-sf-regular pt-5">
          {" "}
          <span className="text-atlantis-green font-sf-semibold">
            STEP 1:
          </span>{" "}
          Find your ready made logo
        </h1>
        <h1 className="text-dark-green text-minimum font-sf-regular ">
          Pick the right one and go ahead. GraphicsGround sells all predesigned
          logos only once. The item is removed from the market once it has been
          sold. Copyrights are fully transferred to the buyer with every
          purchase. As a result, you can trademark your ready-made logo and use
          it wherever you like!{" "}
        </h1>
        <h1 className="text-regular-lite sm:text-regular font-sf-regular pt-5">
          {" "}
          <span className="text-atlantis-green font-sf-semibold">
            STEP 2:
          </span>{" "}
          Free, optional customization
        </h1>
        <h1 className="text-dark-green text-minimum font-sf-regular ">
          {" "}
          You've found a logo that you love, but you'd like to tweak it a bit?
          With your purchase, you have the option of customizing it for free.
          You can add company name, tagline, color based on your requirement.
          You can recjeust all of them during the checkout Page.{" "}
        </h1>
        <h1 className="text-regular-lite sm:text-regular font-sf-regular pt-5">
          {" "}
          <span className="text-atlantis-green font-sf-semibold">
            STEP 3:
          </span>{" "}
          Instant download
        </h1>
        <h1 className="text-dark-green text-minimum font-sf-regular ">
          {" "}
          You have completed your order. Congratulations on your new branding!
          In your email, you will receive a link to download your logo
          immediately after checkout. We will provide you with the adjusted new
          logo files as soon as possible if you have requested design changes.
          Not happy with our ready-made designs?{" "}
        </h1>
        <div className="pb-5">
          <CustomShopTitle
            subHeading={"Not happy with our ready-made designs?"}
            CustomShopLink={"Custom Shop"}
          ></CustomShopTitle>
        </div>
      </div>
    </div>
  );
};

export default Steps;
