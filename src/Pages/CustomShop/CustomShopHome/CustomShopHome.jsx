import { Helmet } from "react-helmet-async";
import SharedBanner from "../../Shared/SharedBanner/SharedBanner";
import CustomMaping from "../CustomMaping/CustomMaping";
import FeturedSection from "../../Home/FeturedSection/FeturedSection";

const CustomShopHome = () => {
  return (
    <div>
      <Helmet>
        <title>GraphicsGround | Custom Shop</title>
      </Helmet>
      <SharedBanner
        sharedTitle={"What do you need "}
        span2={" designed?"}
        sharedDetails={
          "Let your vision come to life, not a template. In this era, custom graphic design is all about pushin boundaries. It's about translating your ideas into visually impactful visuals. We don't just create graphics, we craft experiences. We translate the essence of your brand into a language that resonates directly with your target audience."
        }
      />
      <CustomMaping />
      <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] sm:mx-auto mx-5">
        <h1 className="text-dark-green font-sf-bold 2xl:text-sub-header-1 xl:text-sub-header-1 lg:text-tab-sub-header-1 text-regular-lite">
          May you like our
          <span className="text-atlantis-green">ready-made logos</span>
        </h1>
        <h1 className="2xl:text-minimum xl:text-minimum lg:text-tab-minimum font-sf-regular text-dark-green">
          It can be used anywhrer, anytime, for any purpose, Copyright is yours
        </h1>
      </div>
      <br />
      <FeturedSection />
      <br />
      <br />
    </div>
  );
};

export default CustomShopHome;
