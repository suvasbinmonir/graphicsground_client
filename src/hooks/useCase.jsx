import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useCase = () => {
  const publicAxios = useAxiosPublic(); // Axios instance
  const [caseStudie, setCaseStudie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const response = await publicAxios.get(`/casestudy`);
        setCaseStudie(response.data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [publicAxios]);

  return [caseStudie, loading];
};

export default useCase;
