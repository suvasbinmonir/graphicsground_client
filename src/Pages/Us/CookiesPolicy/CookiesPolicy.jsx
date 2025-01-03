import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CookiesPolicy = () => {
  return (
    <div className="py-10 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
      <div className=" py-14">
        <h1 className="text-header font-sf-bold text-dark-green">
          Cookies Policy
        </h1>
        <div className="flex items-center gap-x-2 border-b pb-4">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            Cookies Policy
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-regular-lite font-sf-regular text-dark-green py-10">
          Effective Date: November 01, 2024
        </h1>

        <h1 className="text-minimum font-sf-regular text-dark-green pb-6">
          GraphicsGround LLC uses cookies to enhance your experience and
          understand how our site is being used.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold"> 1. What Are Cookies?</h1>
          Cookies are small files stored on your device that help us improve
          site functionality, analyze usage, and remember your preferences.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold">
            {" "}
            2. Types of Cookies We Use
          </h1>
          Essential Cookies: Necessary for the website to function correctly.
          <br />
          Analytics Cookies: Help us understand how visitors interact with our
          site.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold"> 3. Managing Cookies</h1>
          You can manage or disable cookies through your browser settings. Note
          that disabling cookies may affect the functionality of our site.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold"> 4. Third-Party Cookies</h1>
          We may allow third-party service providers, like Google Analytics, to
          place cookies to analyze site usage. GraphicsGround LLC does not
          control these cookies and encourages users to review their policies.
          <br />
          <br />
        </h1>
      </div>
    </div>
  );
};

export default CookiesPolicy;
