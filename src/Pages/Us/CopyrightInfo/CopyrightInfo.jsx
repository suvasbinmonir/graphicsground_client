import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CopyrightInfo = () => {
  return (
    <div className="py-16 2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
      <div className="pb-14  ">
        <h1 className="text-header font-sf-bold text-dark-green">
          Copyright Information
        </h1>
        <div className="flex items-center gap-x-2 border-b pb-4">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            Copyright Information
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-regular font-sf-bold text-dark-green pb-2">
          GraphicsGround
        </h1>
        <h1 className="text-dark-green font-sf-regular text-minimum pb-4">
          "LogoGround", "LogoGround.com" and the LogoGround logo are trademarks
          of our parent company Graphics Factory CC.
        </h1>
        <h1 className="text-dark-green font-sf-regular text-minimum pb-4">
          Designers retain the copyright to their logos. When a sale occurs the
          copyright transfers automatically to the buyer. Unless you purchase a
          logo you may not, for any reason, copy a logo from LogoGround. The
          logos offered for sale on LogoGround are not templates, not public
          domain and not free. If a freely downloadable logo is what you need,
          please have a look at LogoLogo.com instead.
        </h1>
        <h1 className="text-regular font-sf-bold text-dark-green pb-2">
          Copyright transfer
        </h1>
        <h1 className="text-dark-green font-sf-regular text-minimum pb-4">
          In the event of a sale the copyright to the sold logo transfers
          automatically to the buyer. The designer may not continue to use the
          logo and may not continue to offer it for sale. LogoGround
          automatically marks the logo as "Sold" and disables the order form as
          soon as a transaction completes. It is possible for a buyer to
          initiate a purchase while another buyer is in the process of
          submitting an order for the same logo. In the event that we receive
          more than one order for the same logo, LogoGround will determine which
          transaction was completed first. Copyright transfers to the first
          buyer. Any subsequent order(s) will be refunded in full.
        </h1>
        <h1 className="text-dark-green font-sf-regular text-minimum pb-4">
          For more information please refer to the GraphicsGround User
          Agreement.
        </h1>
      </div>
    </div>
  );
};

export default CopyrightInfo;
