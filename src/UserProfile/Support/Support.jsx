import { FaArrowRight } from "react-icons/fa";
import support from "./support.jpg";
const Support = () => {
  return (
    <div className="min-h-[700px] border border-dark-green rounded-lg bg-white my-14 p-10 flex flex-col items-center place-content-center">
      <img src={support} className="w-[300px]" alt="" />
      <h1 className="text-center  text-dark-green text-regular font-sf-bold pt-2 uppercase ">
        Support{" "}
      </h1>
      <h1 className="text-center font-sf-regular text-dark-green text-regular ">
        You have no support conversations.
      </h1>
      <button className="text-white bg-dark-green px-4 h-10 rounded-sm flex items-center gap-2 text-regular mt-2">
        Open a New Ticket <FaArrowRight />
      </button>
    </div>
  );
};

export default Support;
