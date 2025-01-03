import { IoCartOutline } from "react-icons/io5";
import { TbUsersGroup } from "react-icons/tb";

const AdminDoc = () => {
  return (
    <div className="pb-20 flex w-[100%]">
      <div className="w-[70%]">
        <div className="border h-52 border-dark-green rounded-lg">
          <h1 className="text-xl p-10 pb-0 flex flex-col gap-y-2 font-sf-regular">
            <TbUsersGroup /> Clients
          </h1>
          <div className="px-10 pt-4 flex ">
            <div className="w-[33%] ">
              <h1 className="text-3xl font-sf-bold text-dark-green ">210</h1>
              <h1 className="text-regular text-dark-green font-sf-regular">
                Total Clients
              </h1>
            </div>
            <div className="border-l border-dark-green pl-6 w-[33%]">
              <h1 className="text-3xl font-sf-bold text-dark-green ">30</h1>
              <h1 className="text-regular text-dark-green font-sf-regular">
                This Month
              </h1>
            </div>
            <div className="border-l border-dark-green pl-6 w-[33%]">
              <h1 className="text-3xl font-sf-bold text-dark-green ">70</h1>
              <h1 className="text-regular text-dark-green font-sf-regular">
                Previus Month
              </h1>
            </div>
          </div>
        </div>

        <br />

        <div className="border h-52 border-dark-green rounded-lg">
          <h1 className="text-xl p-10 pb-0 flex flex-col gap-y-2 font-sf-regular">
            <IoCartOutline />
            Orders
          </h1>
          <div className="px-10 pt-4 flex ">
            <div className="w-[33%] ">
              <h1 className="text-3xl font-sf-bold text-dark-green ">100</h1>
              <h1 className="text-regular text-dark-green font-sf-regular">
                Complete
              </h1>
            </div>
            <div className="border-l border-dark-green pl-6 w-[33%]">
              <h1 className="text-3xl font-sf-bold text-dark-green ">05</h1>
              <h1 className="text-regular text-dark-green font-sf-regular">
                Pending
              </h1>
            </div>
            <div className="border-l border-dark-green pl-6 w-[33%]">
              <h1 className="text-3xl font-sf-bold text-dark-green ">07</h1>
              <h1 className="text-regular text-dark-green font-sf-regular">
                Refunded
              </h1>
            </div>
          </div>
        </div>
        <br />
        <div className="border h-[600px] border-dark-green rounded-lg"></div>
      </div>
      <div className="w-[31%]  ml-4 ">
        <div className="border border-dark-green h-72 rounded-lg"></div>
        <div className="border border-dark-green h-40 rounded-lg mt-4"></div>
      </div>
    </div>
  );
};

export default AdminDoc;
