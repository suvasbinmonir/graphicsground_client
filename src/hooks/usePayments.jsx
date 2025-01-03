import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const usePayments = () => {
  const [orderPayments, setOrderPayments] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get(`/payments`); // Use axiosPublic
        setOrderPayments(response.data); // Axios automatically parses the response data
      } catch (err) {
        console.error("Error fetching payments:", err);
      } finally {
        setLoading(false); // Ensure loading is set to false after the request
      }
    };

    fetchPayments();
  }, [axiosPublic]);

  return [orderPayments, loading];
};

export default usePayments;
