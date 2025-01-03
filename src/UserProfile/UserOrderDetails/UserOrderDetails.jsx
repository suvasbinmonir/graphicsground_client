import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import UserReview from "../../Pages/Shared/UserReview/UserReview";
import useAuth from "../../hooks/useAuth";
import usePayments from "./../../hooks/usePayments";

const UserOrderDetails = () => {
  const { user } = useAuth();
  const [orderPayments] = usePayments();
  const [activeItem, setActiveItem] = useState(null); // To track the active item
  let packaging = [];

  if (orderPayments) {
    packaging = orderPayments.filter((item) => item.email === user.email);
  } else {
    // console.log("orderPayments is undefined or null");
  }

  // Calculate total purchases from all clients
  const totalPurchases = packaging.reduce(
    (total, client) => total + client.purchased.length,
    0
  );

  // Toggle function for displaying extra details
  const handleToggle = (id) => {
    setActiveItem((prev) => (prev === id ? null : id)); // Toggle active item
  };

  return (
    <div className=" bg-white h-screen overflow-y-auto sm:w-[850px]   w-full overflow-hidden border border-dark-green rounded-lg py-5 px-2 sm:p-5 scrollable-div">
      {/* Top Search and Total Section */}
      <div className="flex justify-between">
        <input
          type="search"
          name="Search"
          id="search"
          placeholder="Search"
          className="bg-white px-4 placeholder:text-dark-green border rounded-md border-dark-green h-10 w-full sm:w-72 outline-none"
        />

        <div className="flex gap-5">
          <div>
            <button className="rounded-md border border-dark-green px-5 h-10 cursor-auto text-sm sm:text-regular-lite hidden sm:block">
              Total: {totalPurchases}
            </button>
          </div>
        </div>
      </div>

      <br />

      {/* Table Headers */}
      <div className="flex border-b border-dark-green sm:justify-between border-t py-6">
        <h1 className=" w-full   sm:w-[220px] text-sm sm:text-regular-lite   text-dark-green font-sf-regular">
          Order
        </h1>
        <h1 className=" w-full   sm:w-[220px] text-sm sm:text-regular-lite   text-dark-green font-sf-regular">
          Date
        </h1>
        <h1 className=" w-full   sm:w-[220px] text-sm sm:text-regular-lite   text-dark-green font-sf-regular">
          Order Name
        </h1>
        <h1 className="w-full   sm:w-[100px] text-sm sm:text-regular-lite   text-dark-green font-sf-regular text-end sm:text-start pr-4 sm:pr-0">
          Price
        </h1>
      </div>
      <div>
        {packaging.map((client) => (
          <div key={client._id}>
            {client.purchased.map((purchase, index) => (
              <div key={index}>
                <div
                  onClick={() => handleToggle(purchase.id)}
                  className="purchase-item flex flex-col sm:flex-row justify-between items-center py-2 hover:border hover:border-atlantis-green cursor-pointer"
                >
                  <div className="w-full sm:w-[220px] flex gap-4 items-center">
                    <div>
                      {purchase.logoImg[1] && (
                        <img
                          src={purchase.logoImg[1]}
                          alt="Second Logo"
                          className="rounded-full w-10 h-10"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-regular-lite text-atlantis-green font-sf-semibold">
                        {client.displayName ? client.displayName : "No Name"}
                      </span>
                      <span className="text-sm text-gray-400">
                        User Id: {client._id}
                      </span>
                    </div>
                  </div>

                  <div className="w-full sm:w-[220px]">
                    <h2 className="text-sm font-sf-regular">
                      {purchase.utcDate}
                    </h2>
                  </div>

                  <div className="w-full sm:w-[220px]">
                    <h4>{purchase.logoName}</h4>
                  </div>

                  <div className="w-full sm:w-[100px]">
                    <h4 className="font-sf-bold">$ {purchase.price}</h4>
                  </div>
                </div>

                {/* Details Section */}
                {activeItem === purchase.id && (
                  <div className="p-4 bg-gray-100 border rounded mt-2">
                    <h3 className="text-regular-lite font-bold fon-sf-regular">
                      Details of {purchase.logoName}
                    </h3>
                    <p className="text-minimum font-sf-regular">
                      <strong>Logo ID:</strong>{" "}
                      {purchase?.id ? purchase.id : client._id}
                    </p>
                    {purchase.selectedItems ? (
                      <div>
                        {purchase.selectedItems.map((item) => (
                          <div key={item.price}>
                            <h1>{item.title}</h1>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                    <p className="text-minimum font-sf-regular">
                      <strong>Price:</strong> ${purchase.price}
                    </p>
                    <p className="text-minimum font-sf-regular mb-3">
                      <strong>Purchase Date:</strong> {purchase.utcDate}
                    </p>

                    {purchase.zipFile && (
                      <a
                        href={purchase?.zipFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-dark-green px-5 py-2 rounded-full text-regular-lite font-sf-regular"
                      >
                        Download ZIP File
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t mt-14 border-dark-green"></div>

      {/* User Review */}
      <UserReview />

      {/* Order Details */}
    </div>
  );
};

export default UserOrderDetails;
