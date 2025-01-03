import {
  faChevronRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="py-16 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
      <div className=" ">
        <h1 className="text-header font-sf-bold text-dark-green">Contact Us</h1>
        <div className="flex items-center gap-x-2 border-b pb-4">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            Contact Us
          </h1>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-dark-green font-sf-regular text-regular pt-2">
          Need a hand? Or a high five?
        </h1>
        <h1 className="text-dark-green font-sf-regular text-regular pt-2">
          Here's how to react us.
        </h1>
        <br />
        <br />
        <h1 className="text-dark-green font-sf-regular text-minimum">
          <FontAwesomeIcon
            icon={faPhone}
            className="pr-2 text-atlantis-green"
          />{" "}
          +1 (505) 358 7879
        </h1>
        <h1 className="text-dark-green font-sf-regular text-minimum">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="pr-2 text-atlantis-green"
          />
          support@graphicsground.com
        </h1>
        <br />

        <br />
        <div className="flex gap-x-32">
          <div>
            <h1 className="text-dark-green font-sf-bold text-regular">
              USA <span className="text-atlantis-green">Office</span>
            </h1>
            <h1 className="text-dark-green font-sf-regular text-minimum">
              1209 MOUNTAIN ROAD PL NE STE R <br /> ALBUQUERQUE, NM 87110 <br />{" "}
              USA
            </h1>
          </div>
          <div>
            <h1 className="text-dark-green font-sf-bold text-regular">
              Bangladesh <span className="text-atlantis-green">Office</span>
            </h1>
            <h1 className="text-dark-green font-sf-regular text-minimum">
              118/7, Chandrima Road No- 03 <br /> Chandrima <br /> Rajshahi
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
