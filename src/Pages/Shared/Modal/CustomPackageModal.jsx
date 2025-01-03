import CustomPackagePaymentCard from "../../../Payment/PaymentCard/CustomPackagePaymentCard";
import usePackage from "./../../../hooks/usePackage";

const CustomPackageModal = ({
  onClose,
  children,
  id,
  card1Price,
  card2Price,
  card3Price,
  selectedItems,
  deliveryTime,
}) => {
  const [pack] = usePackage();
  const item = pack.filter((it) => it._id === id);

  let price;
  // Check each price and return the first one that's not NaN
  if (!isNaN(card1Price)) {
    price = card1Price;
  } else if (!isNaN(card2Price)) {
    price = card2Price;
  } else if (!isNaN(card3Price)) {
    price = card3Price;
  } else {
    price = null; // If all prices are NaN, set to null or handle accordingly
  }
  // console.log(selectedItems, 'chudirvai')
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-md">
        <button
          onClick={onClose}
          className="float-right bg-dark-green text-white font-sf-regular px-3 py-1 rounded-sm hover:bg-[#100d27e0]"
        >
          X
        </button>
        <CustomPackagePaymentCard
          item={item}
          selectedItems={selectedItems}
          price={price}
          deliveryTime={deliveryTime}
        />
      </div>
    </div>
  );
};

export default CustomPackageModal;
