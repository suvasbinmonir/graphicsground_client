import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Logo from "../Pages/Logos/Logo/Logo";
import SoldItems from "../Pages/SoldPage/SoldItems/SoldItems";
import TestimonialHome from "../Pages/Testimonial/TestimonialHome/TestimonialHome";
import CustomShopHome from "../Pages/CustomShop/CustomShopHome/CustomShopHome";
import LogIn from "../Pages/LogIn/LogIn";
import CustomPackage from "../Pages/CustomShop/CustomPackage/CustomPackage";
import CustomPackageCheckOut from "../Pages/Shared/CustomPackageCheckOut/CustomPackageCheckOut";
import ProductPage from "../Pages/Shared/ProductPage/ProductPage";
import ReadyMadeCheckOut from "../Pages/Shared/ReadyMadeCheckOut/ReadyMadeCheckOut";
import CaseStudy from "../Pages/CaseStudy/CaseStudy";
import CustomLogoCaseStudy from "../Pages/Shared/CustomLogoCaseStudy/CustomLogoCaseStudy";
import PrivecyPolicy from "../Pages/Us/PrivecyPolicy/PrivecyPolicy";
import TermsAndCondition from "../Pages/Us/Terms&Condition/TermsAndCondition";
import MoneyBack from "../Pages/Us/MoneyBack/MoneyBack";
import ReportAViolation from "../Pages/Us/ReportAViolation/ReportAViolation";
import About from "../Pages/Us/About/About";
import LicenseAgreeement from "../Pages/LicenseAgreeement/LicenseAgreeement";
import CopyrightInfo from "../Pages/Us/CopyrightInfo/CopyrightInfo";
import CookiesPolicy from "../Pages/Us/CookiesPolicy/CookiesPolicy";
import SuggestionBox from "../Pages/Us/SuggestionBox/SuggestionBox";
import ContactUs from "../Pages/Us/ContactUs/ContactUs";
import AdminNav from "../Admin/AdminBanner/AdminNav";
import Admin from "../Admin/Admin/Admin";
import ItemList from "../Admin/ItemList/ItemList";
import PrivetRouter from "./PrivetRouter";
import Dashboard from "../LayOut/Dashboard";
import AddItem from "../Admin/AddItem/AddItem";
import PaymentCard from "../Payment/PaymentCard/PaymentCard";
import ShowingImage from "../Admin/ShowingImage/ShowingImage";
import UsersList from "../Admin/UsersList/UsersList";
import AllClients from "../Admin/AllClients/AllClients";
import AdminRoute from "./AdminRoutes";
import UserProfile from "../LayOut/UserProfile";
import UserInfo from "../UserProfile/UserInfo/UserInfo";
import UserOrderDetails from "../UserProfile/UserOrderDetails/UserOrderDetails";
import Subscription from "../UserProfile/Subscription/Subscription";
import Support from "../UserProfile/Support/Support";
import Users from "../Admin/Users/Users";
import ClientList from "../Admin/ClientList/ClientList";
import SoldPageHome from "../Pages/SoldPage/SoldPageHome/SoldPageHome";
import Oparetion from "../Oparetion/Oparetion";
import ClientDetails from "../Admin/ClientList/ClientDetails";
import CategoryReview from "../Pages/Shared/CategoryReview/CategoryReview";
import DetailsOf from "../UserProfile/UserOrderDetails/DetailsOf";
import AdminCaseStudy from "../Admin/AdminCaseStudy/AdminCaseStudy";
import { Navbar } from "@material-tailwind/react";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import FullCaseStudy from "../Pages/Shared/CaseStudieCard/FullCaseStudy";
import CustomPackageRequre from "../Pages/CustomShop/CustomMaping/CustomPackageRequre/CustomPackageRequre";
import SearchedData from "../Pages/Shared/SearchedData/SearchedData";
import Requirement from "../Admin/Requirement/Requirement";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logos",
        element: <Logo />,
      },
      {
        path: "/searched-data",
        element: <SearchedData />,
      },
      {
        path: "/sold-items",
        element: <SoldPageHome />,
      },
      {
        path: "/testimonial",
        element: <TestimonialHome />,
      },

      // {
      //   path: "/oparetion",
      //   element: <Oparetion />,
      // },

      {
        path: "/case-study/",
        element: <CaseStudy />,
      },
      {
        path: "case-study/:id",
        element: <FullCaseStudy />,
      },
      {
        path: "/shop",
        element: <CustomShopHome />,
      },
      {
        path: "/shop/:id",
        element: <CustomPackage />,
      },
      {
        path: "/shop/:id/:id2",
        element: <CustomPackageCheckOut />,
      },
      {
        path: "/shop/:id/:id2/:id3",
        element: <CustomPackageRequre />,
      },
      {
        path: "/log-in",
        element: <LogIn />,
      },
      {
        path: "/product-page/:id",
        element: <ProductPage />,
      },
      {
        path: "/product-page/:id/:id2",
        element: <ReadyMadeCheckOut />,
      },
      // {
      //   path: "/product-page/:id/:id2/:id3",
      //   element: <PaymentCard />,
      // },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivecyPolicy />,
      },
      {
        path: "/violation",
        element: <ReportAViolation />,
      },
      {
        path: "/money-back-guarantee",
        element: <MoneyBack />,
      },
      {
        path: "/license-agreement",
        element: <LicenseAgreeement />,
      },
      {
        path: "/copyright-info",
        element: <CopyrightInfo />,
      },
      {
        path: "/cookies-policy",
        element: <CookiesPolicy />,
      },
      {
        path: "/suggestion-box",
        element: <SuggestionBox />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/give-us-a-review/:id",
        element: <CategoryReview />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <Admin />,
      },
      {
        path: "item-list",
        element: <ItemList />,
      },
      {
        path: "add-item",
        element: <AddItem />,
      },
      {
        path: "show-case",
        element: <ShowingImage />,
      },
      {
        path: "clients-list",
        element: <ClientList />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "clients",
        element: <AllClients />,
      },
      {
        path: "case-study",
        element: <AdminCaseStudy />,
      },
      {
        path: "clients-list/client-details/:id",
        element: <ClientDetails />,
      },
      {
        path: "requirement",
        element: <Requirement />,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <PrivetRouter>
        {/* <NavBar/> */}
        <UserProfile />
        {/* <Footer/> */}
      </PrivetRouter>
    ),
    children: [
      {
        path: "/profile/user",
        element: <UserInfo />,
      },
      {
        path: "/profile/user/details-of/:id",
        element: <DetailsOf />,
      },
      {
        path: "/profile/order-details",
        element: <UserOrderDetails />,
      },
      {
        path: "/profile/subscription",
        element: <Subscription />,
      },
      {
        path: "/profile/support",
        element: <Support />,
      },
      {
        path: "/profile/support",
        element: <Support />,
      },
    ],
  },
]);
