import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const LicenseAgreeement = () => {
  return (
    <div className="py-10 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
      <div className=" py-14">
        <h1 className="text-header font-sf-bold text-dark-green">
          Licence Agreement
        </h1>
        <div className="flex items-center gap-x-2 border-b pb-4">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            Licence Agreement
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-regular-lite font-sf-regular text-dark-green py-10">
          Effective Date: November 01, 2024
        </h1>

        <h1 className="text-minimum font-sf-regular text-dark-green pb-6">
          By purchasing a logo or service from GraphicsGround LLC, you agree to
          this Licence Agreement.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold">1. Grant of License</h1>
          Upon purchase, GraphicsGround LLC grants you a perpetual,
          non-exclusive, worldwide licence to use the logo in any media.
          <br />
          <br /> <h1 className="text-regular font-sf-bold"> 2. Usage Rights</h1>
          You may use the logo for personal or commercial purposes, including
          online, print, and digital media, without requiring further permission
          from GraphicsGround LLC.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold"> 3. Modifications</h1>
          You are free to modify the logo as needed, provided it aligns with the
          purposes agreed upon at purchase.
          <br />
          <br /> <h1 className="text-regular font-sf-bold"> 4. Restrictions</h1>
          You may not resell, redistribute, or sublicense the logo to any third
          party without express written consent from GraphicsGround LLC. e.
          <br />
          <br />
          <h1 className="text-regular font-sf-bold">
            Ownership of Copyrights:
          </h1>
          GraphicsGround LLC holds the copyright of all logos, designs, and
          other materials provided until purchase is complete. Upon completion
          of purchase, all rights are transferred to the buyer, granting full
          ownership and copyright.
          <br />
          <br />{" "}
          <h1 className="text-regular font-sf-bold">Prohibited Actions:</h1>
          Prior to purchase, no user may copy, distribute, or modify any logos
          or designs on the website without express permission. Violations may
          result in legal action.
          <br />
          <br /> <br />
          <br />{" "}
        </h1>
      </div>
    </div>
  );
};

export default LicenseAgreeement;
