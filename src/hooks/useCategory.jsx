import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategory = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: category = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/category`);
      return res.data;
    },
  });

  return [category, refetch];
};

export default useCategory;
