import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "https://api.graphicsground.com/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosPublic;
};

export default useAxiosPublic;
