import { Link } from "react-router-dom";
import usePayments from "../../hooks/usePayments";

const ClientList = () => {
  const [orderPayments] = usePayments();
  // console.log(orderPayments);
  return (
    <div className="m-10 p-10 border border-dark-green rounded-lg bg-white min-h-screen">
      <div className="flex justify-between">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-white rounded-lg border px-2 py-3 w-96 border-dark-green outline-none"
        />
        <button className="bg-dark-green text-white font-sf-regular text-regular-lite py-2 px-10 rounded-lg">
          Totla 0
        </button>
      </div>
      <br />
      <br />
      <div className="flex border border-dark-green w-[100%] rounded ">
        <div className="py-2 pl-2 w-[16.6%]  capitalize text-dark-green font-sf-regular text-regular-lite ">
          User
        </div>
        <div className="py-2 pl-2 w-[22.6%] border-l border-dark-green capitalize text-dark-green font-sf-regular text-regular-lite ">
          Email
        </div>
        <div className="py-2 pl-2 w-[16.6%] border-l border-dark-green capitalize text-dark-green font-sf-regular text-regular-lite ">
          Phone
        </div>
        <div className="py-2 pl-0 w-[10.6%] border-l border-dark-green capitalize text-dark-green font-sf-regular text-regular-lite ">
          Total Order
        </div>
        <div className="py-2 pl-2 w-[16.6%] border-l border-dark-green capitalize text-dark-green font-sf-regular text-regular-lite ">
          Total Spent
        </div>

        <div className="py-2 pl-2 w-[16.6%] border-l border-dark-green capitalize text-dark-green font-sf-regular text-regular-lite ">
          Our Country Time
        </div>
      </div>
      <div>
        {orderPayments?.length > 0 ? (
          <div>
            {orderPayments.map((clients) => (
              <Link
                to={`/admin/clients-list/client-details/${clients._id}`}
                key={clients._id}
              >
                <div className="flex border my-3 py-2 border-dark-green hover:drop-shadow-xl  cursor-pointer hover:bg-dark-green hover:text-white">
                  <div className="pl-2 flex flex-col w-[16.6%]">
                    <span className="text-regular-lite text-atlantis-green font-sf-regular capitalize">
                      {clients.name}
                    </span>
                    <span className="text-lg  font-sf-regular capitalize">
                      Customar ID: {clients._id}
                    </span>
                  </div>
                  <div className="pl-2  font-sf-regular text-lg w-[22.6%]">
                    {clients.email}
                  </div>

                  <h1 className="pl-2  font-sf-regular text-regular-lite w-[16.6%]">
                    +9903847374
                  </h1>
                  <div className="pl-2  font-sf-regular text-regular-lite w-[10.6%]">
                    {clients.purchased.length}
                  </div>
                  <div className="pl-2  font-sf-regular text-regular-lite w-[16.6%]">
                    <div>
                      $
                      {clients.purchased.reduce((total, singlePurchased) => {
                        return total + parseFloat(singlePurchased.price);
                      }, 0)}
                    </div>
                  </div>
                  <div className="pl-2  ">time</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex justify-start text-2xl">
            There is no clients at all
          </div>
        )}
        {/* {orderPayments.map((clients) => (
          <div key={clients._id}>{clients.length}</div>
        ))} */}
      </div>
    </div>
  );
};

export default ClientList;
