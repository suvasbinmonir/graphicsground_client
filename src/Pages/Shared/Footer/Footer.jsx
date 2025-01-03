import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "/logo.png";
import facebook from "../Footer/Icon/facebook.png";
import instagram from "../Footer/Icon/instagram.png";
import linkedin from "../Footer/Icon/linkedin.png";
import pintarest from "../Footer/Icon/pintarest.png";
import x from "../Footer/Icon/x.png";
import youtube from "../Footer/Icon/youtube.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-dark-green">
      <div className=" flex justify-center ">
        <footer className="footer bg-dark-green py-10  flex justify-between flex-col sm:flex-row  pb-20 w-[75%]">
          <nav>
            <h6 className="text-atlantis-green text-regular font-sf-semibold pb-5">
              Content
            </h6>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to={"/"}
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Home Page
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to={"/shop/custom-logo-design"}
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Custom Logo
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="/shop/brand-style-guide"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Brand Style Guide
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="/shop/packaging-design"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Packaging Design
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="/shop/image-to-vector"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Image to Vector
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to={"testimonial"}
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Testimonial
              </Link>
            </div>
          </nav>
          <nav>
            <h6 className="text-atlantis-green text-regular font-sf-semibold  pb-5">
              Legal
            </h6>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="terms-and-conditions"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Terms and Condition{" "}
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="privacy-policy"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="/license-agreement"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                License Agreement{" "}
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="/copyright-info"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Copyright Information{" "}
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="/cookies-policy"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Cookies Policy
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to={"/money-back-guarantee"}
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Money Back Guarantee
              </Link>
            </div>
          </nav>
          <nav>
            <h6 className="text-atlantis-green text-regular font-sf-semibold  pb-5">
              Support
            </h6>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to={"/about-us"}
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                About Us{" "}
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="/suggestion-box"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Suggestion Box
              </Link>
            </div>
            {/* <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="violation"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Report a Violation{" "}
              </Link>
            </div> */}
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <Link
                to="/contact-us"
                className="link link-hover font-sf-light    text-minimum text-white  "
              >
                Contact Us{" "}
              </Link>
            </div>
            <div className="flex place-items-center">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#FFFFFF", fontSize: "4px" }}
              />
              , &nbsp;
              <a className="link link-hover font-sf-light    text-minimum text-white  ">
                Blog
              </a>
            </div>
          </nav>
          <form>
            <h6 className="text-atlantis-green text-regular font-sf-semibold  pb-5">
              Social Media
            </h6>
            <fieldset className="form-control w-80">
              <div className="join">
                <a
                  href="https://facebook.com/graphicsground.official"
                  target="_blank"
                >
                  <img
                    width={"41px"}
                    className="mr-4"
                    src={facebook}
                    alt="facebook icon"
                  />
                </a>
                <a href="https://x.com/Graphics_Ground" target="_blank">
                  <img width={"41px"} className="mr-4" src={x} alt="x icon" />
                </a>
                <a
                  href="https://www.instagram.com/graphicsground"
                  target="_blank"
                >
                  <img
                    width={"41px"}
                    className="mr-4"
                    src={instagram}
                    alt="instagram icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/graphicsground"
                  target="_blank"
                >
                  <img
                    width={"41px"}
                    className="mr-4"
                    src={linkedin}
                    alt="linkedin icon"
                  />
                </a>
                <a
                  href="https://www.pinterest.com/GraphicsGround/"
                  target="_blank"
                >
                  <img
                    width={"41px"}
                    className="mr-4"
                    src={pintarest}
                    alt="pintarest icon"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@GraphicsGround"
                  target="_blank"
                >
                  <img
                    width={"41px"}
                    className="mr-4"
                    src={youtube}
                    alt="youtube icon"
                  />
                </a>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
      <div className="flex justify-center bg-dark-green">
        <div className="border-b-[0.5px] border-atlantis-green w-[75%]  "></div>
      </div>
      <br />
      <div className="flex justify-center ">
        <footer className="footer bg-dark-green text-neutral-content items-center py-4 w-[75%]">
          <aside className="grid-flow-row mx-auto sm:grid-flow-col items-center">
            <img src={logo} alt="Grapichs Ground Logo " className="sm:pr-3 mx-auto" width={"210px"}></img>{" "}
           
            <p className="font-sf-light  text-xs  sm:text-minimum text-white  ">
              Copyright © {new Date().getFullYear()} GraphicsGround - All rights
              reserved.
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
