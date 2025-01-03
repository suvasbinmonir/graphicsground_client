import { ImCross } from "react-icons/im";
import PaymentCard from "../../../Payment/PaymentCard/PaymentCard";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
      <div className="bg-white p-5 sm:py-5 py-10   rounded shadow-md">
        <button
          onClick={onClose}
          className="float-right text-regular-liter text-white bg-dark-green px-3 rounded py-2"
        >
          <ImCross />
        </button>
        <PaymentCard />
      </div>
    </div>
  );
};

export default Modal;
