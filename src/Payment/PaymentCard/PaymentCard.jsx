import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/ReadyMadeCheckOutForm";
import { useLocation, useParams } from "react-router-dom";
import useLogos from "../../hooks/useLogos";
import { useEffect, useState } from "react";
import ReadyMadeCheckOutForm from "../CheckoutForm/ReadyMadeCheckOutForm";

// TODO:I will add the publick key later
const stripePromise = loadStripe(
  `pk_test_51JwI1lBzPNMCWJcZUF5IzzhrOmF3SbtaQ3BQaraPWlXLzEnHezN4irVHpkeqYML0kft3nd5HOG4HAsl2olwTD1qh003HMlgCTK`
);
const PaymentCard = () => {
  const [dt, setDt] = useState();
  const { id } = useParams();
  const [logos] = useLogos();
  useEffect(() => {
    if (logos.length > 0) {
      const foundData = logos.find((dt) => dt._id === id);
      setDt(foundData);
    }
  }, [logos, id]);
  if (!dt) return <div>Loading...</div>;
  const { price, title, imageUrls, _id, zipUrl, selectedCategories } = dt;
  return (
    <div>
      <Elements stripe={stripePromise}>
        <ReadyMadeCheckOutForm
          price={price}
          logoName={title}
          logoImg={imageUrls}
          logoId={_id}
          zipUrl={zipUrl}
          selectedCategories={selectedCategories}
        />
      </Elements>
    </div>
  );
};

export default PaymentCard;
