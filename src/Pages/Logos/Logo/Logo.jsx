// import Example from "../../example/Example";
import { Helmet } from "react-helmet-async";
import CustomShopTitle from "../../Shared/CustomShopTitle/CustomShopTitle";
import LogosDesign from "../../Shared/LogosDesign/LogosDesign";
import SharedBanner from "../../Shared/SharedBanner/SharedBanner";
import BrowserLinks from "../BrowserLinks/BrowserLinks";

const Logo = () => {
  return (
    <div>
      <Helmet>
        <title>GraphicsGround | Logos</title>
      </Helmet>
      <SharedBanner
        span2={"Exclusive logo for sale"}
        sharedDetails={
          'Logos with "EXCLUSIVE" badges are for one time sale only, buyer will get full copyright ownership.'
        }
      />
      <LogosDesign />
      {/* <Example /> */}
      <BrowserLinks />
      <CustomShopTitle
        subHeading={"Not happy with our ready-made designs?"}
        CustomShopLink={"Custom Shop"}
      ></CustomShopTitle>
    </div>
  );
};

export default Logo;
