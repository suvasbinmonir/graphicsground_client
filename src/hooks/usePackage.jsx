import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const usePackage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get(`/package`);
        setPackages(response.data);
        setError(null);
      } catch (err) {
        // console.error("Error fetching packages:", err);
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [axiosPublic]);

  return [packages, loading, error];
};

export default usePackage;
