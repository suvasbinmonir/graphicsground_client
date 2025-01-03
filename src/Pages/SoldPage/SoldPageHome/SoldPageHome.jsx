import React from "react";
import { Helmet } from "react-helmet-async";
import SharedBanner from "../../Shared/SharedBanner/SharedBanner";
import BrowserLinks from "../../Logos/BrowserLinks/BrowserLinks";
import CustomShopTitle from "../../Shared/CustomShopTitle/CustomShopTitle";
import SoldItems from "../SoldItems/SoldItems";
import useScrollToTop from "../../../hooks/useScrollToTop ";

const SoldPageHome = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>GraphicsGround | Sold Items</title>
      </Helmet>
      <SharedBanner
        span2={"Sold logos"}
        sharedDetails={
          "The logos have been sold to buyer only once, and their copyright has been transferred."
        }
      />
      <SoldItems />
      <BrowserLinks />
      <CustomShopTitle
        subHeading={"Not Haqppy with our ready-made designs?"}
        CustomShopLink={"Custom Shop"}
      ></CustomShopTitle>
    </div>
  );
};

export default SoldPageHome;
