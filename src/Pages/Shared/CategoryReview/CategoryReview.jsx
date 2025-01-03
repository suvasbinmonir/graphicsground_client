import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import usePayments from "../../../hooks/usePayments";
import useAuth from "../../../hooks/useAuth";

const CategoryReview = () => {
  const { id: logoId } = useParams(); // Get the :id from the URL
  const [orderPayments] = usePayments(); // Fetch all payment data
  const { user } = useAuth(); // Get user data
  const [purchasedItem, setPurchasedItem] = useState(null); // Store the specific purchased item
  const [review, setReview] = useState(""); // State for review input
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Filter the purchased item for the given logoId
    const fetchPurchasedItem = () => {
      if (!orderPayments || !Array.isArray(orderPayments)) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const foundItem = orderPayments
        .flatMap((payment) => payment.purchased || []) // Flatten all purchased arrays, handling undefined
        .find((item) => item.logoId === logoId); // Find the matching logoId

      setPurchasedItem(foundItem || null);
      setLoading(false);
    };

    fetchPurchasedItem();
  }, [logoId, orderPayments]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!review.trim()) {
      alert("Please enter a review before submitting.");
      return;
    }

    // Post the review to your server or database
    console.log("Submitting review:", {
      user: user.email,
      logoId: purchasedItem.logoId,
      review,
    });

    alert("Review submitted successfully!");
    setReview(""); // Reset the input field
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!purchasedItem) {
    return <div>No purchased item found for this logo ID.</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-dark-green font-sf-bold text-xl">Review for Logo</h1>
      <div className="mt-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Display Logo Images */}
          {purchasedItem.logoImg.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Logo ${purchasedItem.logoName} image ${idx + 1}`}
              className="w-32 h-32 object-cover rounded-lg border border-dark-green"
            />
          ))}
        </div>
        <div className="mt-4">
          <p className="text-dark-green font-sf-regular">
            <strong>Logo Name:</strong> {purchasedItem.logoName}
          </p>
          <p className="text-dark-green font-sf-regular">
            <strong>Logo ID:</strong> {purchasedItem.logoId}
          </p>
          <p className="text-dark-green font-sf-regular">
            <strong>Price:</strong> ${purchasedItem.price}
          </p>
          <p className="text-dark-green font-sf-regular">
            <strong>Zip File:</strong>{" "}
            <a
              href={purchasedItem.zipFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Download
            </a>
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-dark-green font-sf-bold text-lg">
            Selected Categories:
          </h2>
          <ul className="list-disc list-inside mt-2">
            {purchasedItem.selectedCategories.map((category) => (
              <li
                key={category._id}
                className="text-dark-green font-sf-regular"
              >
                {category.browseName}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Review Submission Form */}
      <form onSubmit={handleReviewSubmit} className="mt-6">
        <h2 className="text-dark-green font-sf-regular text-lg mb-2">
          Submit Your Review
        </h2>
        <textarea
          className="w-full p-3 border rounded-md border-dark-green focus:outline-none focus:ring-2 focus:ring-dark-green"
          placeholder="Write your review here..."
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-atlantis-green text-white rounded-md hover:bg-dark-green transition-all"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default CategoryReview;
