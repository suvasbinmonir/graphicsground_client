import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Create the axios instance with the base URL
  const axiosSecure = axios.create({
    baseURL: "https://api.graphicsground.com/api",
  });

  // Request interceptor to add authorization header for every secure API call
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // Add token to the request header
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle 401 and 403 errors
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response ? error.response.status : null;
      // console.log("Status error in the interceptor", status);

      // Handle 401 or 403 status codes: log out the user and redirect to login
      if (status === 401 || status === 403) {
        // await logOut();
        // navigate("/log-in");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
