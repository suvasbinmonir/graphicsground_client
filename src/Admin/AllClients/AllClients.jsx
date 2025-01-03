import useAllClients from "../../hooks/useAllClients";

const AllClients = () => {
  const [payments] = useAllClients();
  return (
    <div>
      {payments.map((client) => (
        <div key={client._id}>
          <div className="flex items-center border-b border-dark-green my-10 ">
            <div className="w-[100%] flex justify-stretch mx-auto items-center pl-20">
              <h1 className=" text-atlantis-green font-sf-regular text-minimum w-[20%]  ">
                {client.email}
              </h1>
              <h1 className=" text-dark-green font-sf-regular text-minimum w-[20%] ">
                {client.transactionId}
              </h1>

              <h1 className=" text-atlantis-green font-sf-regular text-minimum w-[20%] ">
                {client.ourCountry}
              </h1>
              <h1 className=" text-dark-green font-sf-regular text-minimum w-[20%] ">
                {client.utcDate}
              </h1>
              <h1 className=" text-dark-green font-sf-regular text-minimum w-[20%] ">
                {client.status}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClients;
