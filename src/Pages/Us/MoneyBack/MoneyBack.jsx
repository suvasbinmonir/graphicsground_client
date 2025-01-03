import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MoneyBack = () => {
  return (
    <div className="py-10 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
      <div className=" py-14">
        <h1 className="text-header font-sf-bold text-dark-green">
          Money-Back Guarantee
        </h1>
        <div className="flex items-center gap-x-2 border-b pb-4">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            Money-Back Guarantee
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-minimum font-sf-regular text-dark-green pb-6">
          At GraphicsGround LLC, customer satisfaction is our priority. If you
          are not satisfied with your purchase, we offer a **100% money-back
          guarantee** under the following conditions:
          <br />
          <br />
          <h1 className="text-regular font-sf-bold">
            1. Eligibility for Refunds
          </h1>
          Refund requests must be made within [Insert Time Frame, e.g., 30 days]
          of purchase. <br />
          Refunds apply only if the logo files have not been used or modified.
          <br />
          <h1 className="text-regular font-sf-bold">2. Process for Refunds</h1>
          To initiate a refund, contact us at [Your Contact Email] with your
          order details and reason for dissatisfaction.
          <br />
          <br /> <h1 className="text-regular font-sf-bold"> 3. Exclusions</h1>
          Custom logos or modified designs are not eligible for refunds.
          Additionally, logos downloaded and used in any form are
          non-refundable.
          <br />
          <br />
        </h1>
      </div>
    </div>
  );
};

export default MoneyBack;
