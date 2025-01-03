import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useLogos = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    refetch,
    data: logos = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["logos"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/logos`);
      return res.data;
    },
    // Optionally, you can specify the staleTime, cacheTime, etc., for more advanced behaviors
  });
  // console.log(isLoading);
  return [logos, refetch, isLoading, isError, error];
};

export default useLogos;
