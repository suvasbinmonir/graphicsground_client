import {
  CardExpiryElement,
  CardNumberElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import Swal from "sweetalert2";
import moment from "moment-timezone";
import useAuth from "../../hooks/useAuth";
import useLogos from "../../hooks/useLogos";
import { useEffect, useState } from "react";
import { FaUnlockAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorResult, logEvent, Result } from "./util";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import visa from "./cards/visa.jpg";
import mastercard from "./cards/mastercard.jpg";
import amex from "./cards/amex.jpg";
import diners from "./cards/diners.jpg";
import discover from "./cards/discover.jpg";
import unionpay from "./cards/unionpay.jpg";
import jcb from "./cards/jcb.jpg";
import logo from "/logolight.png";
import mark from "./cards/mark.png";
import { countries } from "countries-list";
const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "18px",
      color: "#424770",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};
const CustomPackageCheckoutForm = ({
  price,
  logoName,
  logoImg,
  logoId,
  zipUrl,
  selectedCategories,
  selectedItems,
  deliveryTime,
}) => {
  const totalPrice = price;
  const selectedItemTotalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const [logos] = useLogos();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const { id, id2 } = useParams();
  // console.log(id, "this is the id");
  // console.log(id2, "this is the id2");
  const [name, setName] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("US");
  const [cardBrand, setCardBrand] = useState(""); // For card brand detection
  const axiosSecure = useAxiosSecure();
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axiosSecure, totalPrice]);

  const handleCardChange = (event) => {
    // console.log(event, "this is the card element event");
    if (event.brand) {
      setCardBrand(event.brand); // Update card brand dynamically
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardNumberElement);
    if (!card) return;

    // Generate the custom ID
    const generateCustomID = () => {
      const randomNumbers = Array.from({ length: 12 }, () =>
        Math.floor(Math.random() * 10)
      ).join("");
      return `gg-${randomNumbers}`;
    };

    const customID = generateCustomID(); // Generate the ID for this payment

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name,
        address: { postal_code: postal, country },
      },
    });

    if (payload.error) {
      setErrorMessage(payload.error.message);
      return;
    }

    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
          billing_details: { name: name || "Anonymous" },
        },
      }
    );

    if (confirmError) {
      console.error("Error during payment confirmation:", confirmError);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      setIsPaymentSuccessful(true);

      const payment = {
        email: user.email,
        purchased: [
          {
            id: customID, // Include the custom ID here
            name: name,
            postal: postal,
            cardBrand: cardBrand,
            logoName,
            logoImg,
            logoId,
            country,
            time: deliveryTime,
            zipFile: zipUrl,
            price: totalPrice,
            selectedCategories,
            selectedItems,
            transactionId: paymentIntent.id,
            utcDate: moment().utc().format("MMMM Do YYYY, h:mm:ss a"),
            status: paymentIntent.status,
            ourCountry: moment()
              .tz("Asia/Dhaka")
              .format("MMMM Do YYYY, h:mm:ss a"),
          },
        ],
      };

      const res = await axiosSecure.post("/payments", payment);
      // console.log(res, "this is the success message from the custom package");

      if (res.data.message) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your payment is successful and product status updated",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(`${customID}`);
      }
    }
  };

  // console.log(countries);
  const countryOptions = Object.entries(countries).map(([code, country]) => (
    <option key={code} value={code}>
      <div className="flex justify-between">
        <h1>{country.name}</h1>
        {/* <h1>{country?.phone }</h1> */}
      </div>
    </option>
  ));

  const cardIcon = {
    visa: <img className="w-8 sm:w-12 " src={visa} alt="" />,
    mastercard: <img className="w-8 sm:w-12 " src={mastercard} alt="" />,
    amex: <img className="w-8 sm:w-12 " src={amex} alt="" />,
    discover: <img className="w-8 sm:w-12 " src={discover} alt="" />,
    diners: <img className="w-8 sm:w-12 " src={diners} alt="" />,
    jcb: <img className="w-8 sm:w-12 " src={jcb} alt="" />,
    unionpay: <img className="w-8 sm:w-12 " src={unionpay} alt="" />,
    unknown: (
      <div className="flex gap-2">
        <img className="w-8 sm:w-12 rounded" src={visa} alt="Visa" />
        <img
          className="w-8 sm:w-12  rounded"
          src={mastercard}
          alt="Mastercard"
        />
        <img
          className="w-8 sm:w-12  rounded"
          src={amex}
          alt="American Express"
        />
        <img className="w-8 sm:w-12  rounded" src={discover} alt="Discover" />
      </div>
    ),
  };
  // console.log(customId, "this is the mf custom id");
  return (
    <div className="sm:min-w-[800px] w-full h-[90vh] pb-20 mx-auto ">
      <img src={logo} className="sm:w-44 w-36 mb-10 mt-8 sm:ml-3" alt="" />
      <div className="sm:w-[600px] w-full mx-auto sm:pl-5 sm:pr-[48px] ">
        <h1 className="text-sm font-sf-regular text-atlantis-green mb-2 px-4 py-1 bg-dark-green w-fit">
          {deliveryTime} {deliveryTime === 1 ? "day delivery" : "days delivery"}
        </h1>
        <div className="flex justify-between pb-1">
          <h3 className="text-dark-green font-sf-bold text-base sm:text-regular pb-2 ">
            {logoName}
          </h3>
          <h1 className="text-base sm:text-regular font-sf-bold text-dark-green">
            ${totalPrice - selectedItemTotalPrice}
          </h1>
        </div>
        <ul className="text-dark-green font-sf-regular">
          {selectedItems.map((item, index) => (
            <li key={index} className="">
              <div className="">
                <div className="flex justify-between ">
                  <h1 className="flex items-center gap-1 text-sm sm:text-base">
                    {" "}
                    <div>
                      <img src={mark} className="w-2 sm:w-3 " alt="" />
                    </div>
                    <h1 className="text-[11px] sm:text-base"> {item.title} </h1>
                  </h1>
                  <h1 className="text-[11px] sm:text-base"> ${item.price}</h1>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <br className="hidden sm:block" />
      <br className="hidden sm:block" />
      <div className="divider text-dark-green font-sf-semibold text-base sm:text-regular-lite">
        Billing Information
      </div>
      <br />
      <form
        onSubmit={handleSubmit}
        className="payment-from sm:w-[600px] w-full sm:pl-5  "
      >
        <div className="flex flex-col sm:flex-row sm:gap-3 mb-3">
          <div>
            <label
              htmlFor="name"
              className="text-dark-green font-sf-reglar text-base sm:text-regular-lite"
            >
              Full Name
            </label>
            <br className="hidden sm:block" />
            {/* <img className="w-16" src={visa} alt="" /> */}
            <input
              id="name"
              required
              placeholder="Saikat Somir"
              className="bg-white  outline-none pl-3 text-regular-lite rounded h-12 shadow-md font-sf-regular text-dark-green sm:w-64 w-full  border mb-2 sm:mb-0"
              value={name}
              // style={{ boxShadow: " rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br className="hidden sm:block" />
          <div>
            <label
              htmlFor="postal"
              className="text-dark-green font-sf-regular text-base sm:text-regular-lite"
            >
              Postal Code
            </label>
            <br />
            <input
              id="postal"
              className="bg-white outline-none sm:w-64 w-full shadow-md rounded h-12 text-dark-green font-sf-regular text-regular-lite pl-2 border"
              required
              type="number"
              placeholder="12345"
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:w-[532px] w-full relative mb-3">
          <label
            htmlFor="cardNumber"
            className="text-dark-green font-sf-regular text-base  sm:text-regular-lite"
          >
            Card Number
          </label>
          <CardNumberElement
            id="cardNumber"
            onBlur={logEvent("blur")}
            onChange={(e) => {
              logEvent("change")(e);
              handleCardChange(e);
            }}
            onFocus={logEvent("focus")}
            onReady={logEvent("ready")}
            options={ELEMENT_OPTIONS}
            className="shadow-md rounded h-12 text-dark-green font-sf-regular text-base sm:text-regular-lite border w-full pl-3 pr-12 "
          />
          {cardBrand ? (
            <div className="absolute top-[54px] right-3 transform -translate-y-1/2 text-dark-green ">
              <p>{cardIcon[cardBrand]}</p>
            </div>
          ) : (
            <div className="absolute top-[54px] right-3 transform -translate-y-1/2 text-dark-green ">
              <div className="flex gap-2">
                <img className="w-7 sm:w-12 rounded " src={visa} alt="Visa" />
                <img
                  className="w-7 sm:w-12  rounded"
                  src={mastercard}
                  alt="Mastercard"
                />
                <img
                  className="w-7 sm:w-12  rounded"
                  src={amex}
                  alt="American Express"
                />
                <img
                  className="w-7 sm:w-12  rounded"
                  src={discover}
                  alt="Discover"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-5 mb-3">
          <div>
            <label
              htmlFor="expiry"
              className="text-dark-green font-sf-regular text-base sm:text-regular-lite "
            >
              Card Expiration
            </label>
            <CardExpiryElement
              id="expiry"
              options={ELEMENT_OPTIONS}
              className="sm:w-64 w-full shadow-md rounded h-12 text-dark-green font-sf-regular text-regular-lite border mb-2 sm:mb-0"
            />
          </div>
          <div>
            <label
              htmlFor="cvc"
              className="text-dark-green font-sf-regular text-base sm:text-regular-lite "
            >
              CVC
            </label>

            <CardCvcElement
              id="cvc"
              options={ELEMENT_OPTIONS}
              className="sm:w-64 w-full shadow-md rounded h-12 text-dark-green font-sf-regular text-regular-lite border"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="country"
            className="text-dark-green font-sf-regular text-base sm:text-regular-lite"
          >
            Country
          </label>
          <br />
          <select
            id="country"
            className="bg-white outline-none sm:w-[532px] w-full  h-12 text-regular-lite font-sf-regular text-dark-green rounded shadow-md border"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countryOptions}
          </select>
        </div>
        {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
        <br />{" "}
        <div className="flex justify-end sm:pr-[48px]">
          <button
            className="payment-button outline-none bg-dark-green w-full py-2 rounded text-atlantis-green font-sf-regular m-0  h-14 text-regular-lite sm:text-regular upDownAnimation"
            type="submit"
            disabled={!stripe || !clientSecret || isPaymentSuccessful}
          >
            Pay ${price}
          </button>
        </div>
      </form>
      <br className="" />
      <br className="" />
      <h1 className="text-center text-dark-green text-sm font-sf-regular flex justify-center gap-2 items-center">
        <FaUnlockAlt />
        Guaranteed <b>safe & secure </b> checkout{" "}
        <button className="border px-1 border-atlantis-green text-atlantis-green">
          Powerd by <b>stripe</b>
        </button>
      </h1>
    </div>
  );
};

export default CustomPackageCheckoutForm;
