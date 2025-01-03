import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./UserReview.css";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserReview = () => {
  const { user } = useAuth();
  const publicAxios = useAxiosPublic();
  const [rating, setRating] = useState(4);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [review, setReview] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleReviewSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const reviewData = {
      name,
      email,
      rating,
      review,
    };

    console.log("Submitting review:", reviewData);

    try {
      const response = await publicAxios.post("/review", reviewData); // Correct endpoint
      if (response.data.message) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for your feedback!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Reload the page after showing success message
          window.location.reload();
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something internal issue. Please try again later!",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      // Reset form fields on success (optional, depending on your use case)
      setRating(4);
      setReview("");
    } catch (error) {
      console.error("Error submitting the review:", error);
    }
  };

  const includedShapesStyles = [ThinStar].map((itemShapes) => ({
    itemShapes,
    activeFillColor: "#f59e0b",
    inactiveFillColor: "#ffedd5",
  }));

  useEffect(() => {
    const checkReviewStatus = async () => {
      try {
        const response = await axiosSecure.get(`/review?email=${user.email}`);
        // const response = await fetch(
        //   `https://api.graphicsground.com/api/review?email=${user.email}`
        // );
        // console.log(response, "this is the review response");
        // const data = await response.json();
        if (response.data.hasReviewed) {
          setHasReviewed(true);
        } else {
          setHasReviewed(false);
        }
      } catch (error) {
        console.error("Error checking review status:", error);
      }
    };

    if (user?.email) {
      checkReviewStatus();
    }
  }, [user]);

  return (
    <div>
      {!hasReviewed ? (
        <div>
          <h1 className="text-tab-regular sm:text-regular text-dark-green font-sf-semibold text-center sm:text-center mt-10 ">
            Tell us how your journey with us was!
          </h1>
          <form
            onSubmit={handleReviewSubmit}
            className="mr-10 p-5 rounded-lg border-dark-green max-w-4xl mx-auto"
          >
            {includedShapesStyles.map((itemStyles, index) => (
              <Rating
                key={`shape_${index}`}
                value={rating}
                onChange={setRating}
                itemStyles={itemStyles}
                className=" max-w-44 sm:max-w-[200px]"
                style={{ margin: "0 auto" }}
              />
            ))}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 mt-2">
              <label className="form-control w-full sm:w-1/2">
                <div className="label">
                  <span className="label-text text-dark-green">
                    Enter your name..*
                  </span>
                </div>
                <input
                  type="text"
                  className="bg-white border rounded py-2 pl-2 border-dark-green focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  readOnly // Keep as read-only if uneditable
                  required
                />
              </label>
              <label className="form-control w-full sm:w-1/2">
                <div className="label">
                  <span className="label-text text-dark-green">
                    Enter your email..*
                  </span>
                </div>
                <input
                  type="email"
                  className="bg-white border rounded py-2 pl-2 border-dark-green focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly // Keep as read-only if uneditable
                  required
                />
              </label>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-dark-green">
                  Write a review to help others..*
                </span>
              </div>
              <textarea
                name="review"
                placeholder="Write here...."
                className="bg-white p-2 mt-4 border border-dark-green focus:outline-none rounded-md w-full"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
            </label>
            <div className="w-full flex justify-start sm:justify-end mt-4">
              <button
                type="submit"
                className="text-white border bg-dark-green text-regular-lite font-sf-regular px-10 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <h1 className="text-center text-regular text-atlantis-green font-sf-regular">
          Thank you for giving us your valuable opinion!
        </h1>
      )}
    </div>
  );
};

export default UserReview;
