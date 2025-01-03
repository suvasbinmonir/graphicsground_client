import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/ReadyMadeCheckOutForm";
import { useLocation } from "react-router-dom";
import CustomPackageCheckoutForm from "../CheckoutForm/CustomPackageCheckoutForm";

// TODO:I will use here env import later
const stripePromise = loadStripe(
  `pk_test_51JwI1lBzPNMCWJcZUF5IzzhrOmF3SbtaQ3BQaraPWlXLzEnHezN4irVHpkeqYML0kft3nd5HOG4HAsl2olwTD1qh003HMlgCTK`
);
const CustomPackagePaymentCard = ({
  item,
  price,
  selectedItems,
  deliveryTime,
}) => {
  const packageData = Array.isArray(item) && item.length > 0 ? item[0] : null;
  // console.log(packageData);

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CustomPackageCheckoutForm
          price={price}
          logoName={packageData?.title}
          logoImg={"Here is no image just senti emoji"}
          logoId={packageData?._id}
          selectedItems={selectedItems}
          deliveryTime={deliveryTime}
        />
      </Elements>
    </div>
  );
};

export default CustomPackagePaymentCard;
