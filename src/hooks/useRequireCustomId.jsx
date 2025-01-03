import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRequireCustomId = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: customId = [] } = useQuery({
    queryKey: ["customId"],
    queryFn: async () => {
      const res = await axiosPublic.get("/getCustomIds");
      return res.data;
    },
  });
  return [customId, refetch];
  console.log(customId, "this is the custom id");
};

export default useRequireCustomId;
