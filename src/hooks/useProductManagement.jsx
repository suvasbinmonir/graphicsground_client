// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

// const useProductManagement = () => {
//   const { user, loading } = useAuth();
//   // console.log(user);
//   const axiosSecure = useAxiosSecure();
//   const { data: isProductManagement, isPending: isProductManagementLoading } =
//     useQuery({
//       queryKey: [user?.email, "isProductManagement"],
//       enabled: !loading,
//       queryFn: async () => {
//         // console.log("asking or checking is admin", user);
//         const res = await axiosSecure.get(
//           `/users/productManagement/${user?.email}`
//         );
//         // console.log(res.data);
//         // console.log(res, "this is the res");
//         return res.data?.admin;
//       },
//     });
//   return [isProductManagement, isProductManagementLoading];
// };

// export default useProductManagement;
