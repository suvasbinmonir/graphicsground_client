import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <>
      <div className="py-10 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
        <div className=" py-14">
          <h1 className="text-header font-sf-bold text-dark-green">
            Terms and Conditions
          </h1>
          <div className="flex items-center gap-x-2 border-b pb-4">
            <Link
              className="text-regular font-sf-regular text-dark-green"
              to="/"
            >
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} />
            <h1 className="text-regular font-sf-regular text-dark-green ">
              Terms and conditions
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-regular-lite font-sf-regular text-dark-green py-10">
            Effective Date: November 01, 2024
          </h1>
          <h1 className="text-regular font-sf-bold text-dark-green pb-2">
            General Terms and Conditions
          </h1>
          <h1 className="text-minimum font-sf-regular text-dark-green pb-6">
            Welcome to GraphicsGround LLC. By accessing or using our website and
            services, you agree to comply with and be bound by the following
            terms and conditions. Please read them carefully.
            <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">
              {" "}
              1. Acceptance of Terms
            </h1>
            By using our website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions. If
            you do not agree, please do not use our services
            <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">2. Services Provided</h1>
            GraphicsGround LLC offers exclusive pre-made logos and associated
            services, including custom logos, packaging design, and brand style
            guides. Each logo is sold only once, and full copyright ownership is
            transferred to the buyer upon purchase.
            <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">
              {" "}
              3. User Responsibilities
            </h1>
            You agree to use the website and services in accordance with
            applicable laws and regulations. You are responsible for any content
            you submit and must not violate any third-party rights or the terms
            outlined herein.
            <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">
              4. Payment Terms All payments
            </h1>
            must be made in full at the time of purchase. Prices are subject to
            change, but once you have completed a transaction, the price is
            guaranteed for your purchase. <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">
              5. Copyright and Ownership Upon <br />
            </h1>
            successful payment, you receive full copyright ownership of the
            purchased logo. You may use the logo in any manner you see fit,
            including for commercial purposes. However, you may not claim the
            logo as your own design.
            <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">6. Refund Policy</h1>
            We offer a 100% money-back guarantee on logo purchases if you are
            not satisfied with your purchase please contact us
            hello@graphicsground.com to get the refund.
            <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">
              {" "}
              7. Limitation of Liability
            </h1>
            GraphicsGround LLC shall not be liable for any indirect, incidental,
            or consequential damages arising out of the use or inability to use
            our services. We do not guarantee that our services will meet your
            requirements or be uninterrupted.
            <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">
              {" "}
              8. Modifications to Terms
            </h1>
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be posted on this page, and your continued use of
            the website constitutes acceptance of the updated terms.
            <br /> <br />
            <h1 className="text-regular font-sf-bold">9. Governing Law</h1>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the State of New Mexico, USA.
            <br />
            <br />{" "}
            <h1 className="text-regular font-sf-bold">
              {" "}
              10. Contact Information
            </h1>
            If you have any questions about these Terms and Conditions, please
            contact us at hello@graphicsground.com
          </h1>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
