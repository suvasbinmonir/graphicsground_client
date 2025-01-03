import subcription from "./subscribe.jpg";
const Subscription = () => {
  return (
    <div className="min-h-[700px] border border-dark-green rounded-lg bg-white my-14 p-10 flex flex-col items-center place-content-center">
      <img src={subcription} className="w-[300px]" alt="" />
      <h1 className="text-center font-sf-regular text-dark-green text-regular-lite pt-2">
        You have no active Subscription now
      </h1>
      <h1 className="text-center font-sf-regular text-dark-green text-regular ">
        Find your first subscription to{" "}
        <span className="text-green-600">the store</span>
      </h1>
    </div>
  );
};

export default Subscription;
