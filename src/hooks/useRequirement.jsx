import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useRequirement = () => {
  const [requirement, setrequirement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure(); // Initialize axiosSecure

  useEffect(() => {
    const fetchrequirement = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get("/requirement"); // Use axiosSecure for the API call
        setrequirement(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching requirement:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchrequirement();
  }, [axiosSecure]);

  return [requirement, loading, error];
};

export default useRequirement;
