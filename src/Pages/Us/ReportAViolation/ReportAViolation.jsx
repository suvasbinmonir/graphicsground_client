import { faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ReportAViolation = () => {
  return (
    <div className="py-16 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
      <div className="pb-14 ">
        <h1 className="text-header font-sf-bold text-dark-green">
          Report a Violation
        </h1>
        <div className="flex items-center gap-x-2 border-b pb-4">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            Report a Violation
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-regular font-sf-bold text-dark-green pb-2">
          If you are reporting a design:
        </h1>
        <h1 className="text-dark-green font-sf-regular text-minimum">
          Please locate the logo on the LogoGround web site first. Click on the
          logo itself to open the detail page for that logo, then click on the
          "Report this logo" link. Please provide as much information as
          possible. Incomplete reports may be processed much slower or not at
          all.
        </h1>
        <br />
        <h1 className="text-regular font-sf-bold text-dark-green pb-2">
          If you are reporting a design:
        </h1>
        <h1 className="text-dark-green font-sf-regular text-minimum">
          Please use our regular contact feature.
        </h1>
        <ul className="pb-4">
          <li>
            {" "}
            <FontAwesomeIcon className="w-3 pr-2" icon={faCircle} />
            Specify the offending content,
          </li>
          <li>
            <FontAwesomeIcon className="w-3 pr-2" icon={faCircle} />
            Its exact location on the LogoGround web site (URL if possible),
          </li>
          <li>
            <FontAwesomeIcon className="w-3 pr-2" icon={faCircle} />
            The action you would like to see taken (such as deleting the
            content) and
          </li>
          <li>
            <FontAwesomeIcon className="w-3 pr-2" icon={faCircle} />
            The reason why you feel the content is inappropriate.
          </li>
        </ul>
        <h1 className="text-dark-green font-sf-regular text-minimum py-4">
          We will respond as soon as possible.
        </h1>
      </div>
    </div>
  );
};

export default ReportAViolation;
