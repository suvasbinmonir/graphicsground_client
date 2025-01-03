import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PrivecyPolicy = () => {
  return (
    <div className="py-10 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
      <div className=" py-14">
        <h1 className="text-header font-sf-bold text-dark-green">
          Privacy Policy
        </h1>
        <div className="flex items-center gap-x-2 border-b pb-4">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-regular-lite font-sf-regular text-dark-green py-10">
          Effective Date: November 01, 2024
        </h1>

        <h1 className="text-minimum font-sf-regular text-dark-green pb-6">
          At GraphicsGround LLC, we are committed to safeguarding your privacy.
          This Privacy Policy outlines our practices regarding the collection,
          use, and disclosure of information we receive from users of our
          website and services.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold">
            {" "}
            1.Information We Collect
          </h1>
          Personal Information: When you purchase a logo or register on our
          site, we may collect personal information, such as your name, email
          address, and billing information. Usage Data: We may collect
          information on how you access and use the website, including IP
          address, browser type, and activity on our pages.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold">
            2. How We Use Your Information
          </h1>
          - To process transactions and deliver services.
          <br />- To improve our website, services, and user experience.
          <br />- To communicate updates, promotions, and offers (you can
          opt-out at any time).
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold">3. Information Sharing</h1>
          We do not sell or rent your information. We may share data with
          trusted third-party service providers who assist us in operating our
          website, but only to the extent necessary for them to provide these
          services.
          <br />
          <br /> <h1 className="text-regular font-sf-bold">4. Data Security</h1>
          We implement robust security measures to protect your information.
          However, no data transmission over the internet is 100% secure.
          <br />
          <br />
          <h1 className="text-regular font-sf-bold">5. Cookies</h1>
          Our website uses cookies to enhance user experience and analyze
          traffic. For details, please see our Cookies Policy.
          <br />
          <br /> <h1 className="text-regular font-sf-bold">6.Your Rights</h1>
          You have the right to access, modify, or delete your personal
          information. Contact us at hello@graphicsground.com to exercise these
          rights.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold">
            7. Changes to This Policy
          </h1>
          GraphicsGround LLC reserves the right to modify this Privacy Policy at
          any time. Updates will be posted on this page.
          <br />
          For questions, please contact us at hello@graphicsground.com
          <br />
          <br />{" "}
        </h1>
      </div>
    </div>
  );
};

export default PrivecyPolicy;
