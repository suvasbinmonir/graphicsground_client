import { FcMoneyTransfer } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import usePayments from "../../hooks/usePayments";
import { useEffect, useState } from "react";
import UserOrderDetails from "../UserOrderDetails/UserOrderDetails";

const UserInfo = () => {
  const { user } = useAuth();
  const [orderPayments] = usePayments();

  const [purchasedLength, setPurchasedLength] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let packaging = [];

    if (orderPayments) {
      packaging = orderPayments.filter((item) => item.email === user.email);
    } else {
      // console.log("orderPayments is undefined or null");
    }

    if (packaging.length > 0) {
      // Set the purchased length from the first item
      setPurchasedLength(packaging[0].purchased.length);

      // Calculate total price of all items in the purchased arrays
      const totalPrice = packaging.reduce((sum, order) => {
        const orderTotal = order.purchased.reduce(
          (orderSum, item) => orderSum + parseInt(item.price),
          0
        );
        return sum + orderTotal;
      }, 0);
      setTotalPrice(totalPrice);
    } else {
      // console.log("No items found in packaging for the specified user.");
    }
  }, [orderPayments, user]);

  return (
    <div className="w-full 2xl:max-w-[100%] h-screen   mx-auto pr-4 sm:pr-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row bg-white border border-dark-green pb-2  overflow-hidden shadow-md">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-[400px] p-4 lg:py-10 bg-gray-50">
          <div className="border border-dark-green w-24 h-24 rounded-lg mb-4"></div>
          <h1 className="text-2xl text-dark-green font-sf-regular text-center capitalize">
            {user.displayName}
          </h1>
          <h1 className="text-lg font-sf-regular text-dark-green text-center mt-2">
            Customer ID:{" "}
            <span className="text-atlantis-green">
              {user.reloadUserInfo.validSince}
            </span>
          </h1>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-around gap-4 mt-6">
            <h1 className="flex items-center gap-2">
              <MdProductionQuantityLimits className="bg-[#bbd6a4] p-1 rounded-lg text-4xl" />
              <span className="text-dark-green font-sf-regular text-lg text-center">
                {purchasedLength} <br /> Total Order
              </span>
            </h1>
            <h1 className="flex items-center gap-2">
              <FcMoneyTransfer className="bg-[#bbd6a4] p-1 rounded-lg text-4xl" />
              <span className="text-dark-green font-sf-regular text-lg text-center">
                {totalPrice} <br /> Total Spent
              </span>
            </h1>
          </div>

          {/* Details Section */}
          <h1 className="text-dark-green text-lg font-sf-regular pb-1 mt-6 w-full">
            Details:
          </h1>
          <div className="border-t border-dark-green w-full mt-2 p-4">
            <h1 className="text-dark-green font-sf-regular text-[16px]">
              User Name: {user.displayName}
            </h1>
            <h1 className="text-dark-green font-sf-regular text-[16px]">
              Email: {user.email}
            </h1>
            <h1 className="text-dark-green font-sf-regular text-[16px]">
              Phone: {user ? "Number didn't get" : ""}
            </h1>
            <h1 className="text-dark-green font-sf-regular text-[16px]">
              Country: {user ? "Unable to locate" : ""}
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block border-r border-dark-green"></div>

        {/* Right Section */}
        <div className="w-full lg:flex-1 p-4">
          <UserOrderDetails />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
