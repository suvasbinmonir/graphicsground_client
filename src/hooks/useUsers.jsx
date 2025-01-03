import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const currentUserEmail = user?.email;
  // console.log(currentUserEmail, "chodon");
  const {
    data: users = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
    // Find the current user from the list of users based on email
  });
  const loggedInUser = users.find((user) => user.email === currentUserEmail);
  return { loggedInUser, refetch, isLoading, error, users };
};

export default useUsers;
