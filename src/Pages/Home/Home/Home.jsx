import useScrollToTop from "../../../hooks/useScrollToTop ";
import LogosDesign from "../../Shared/LogosDesign/LogosDesign";
import FeturedSection from "../FeturedSection/FeturedSection";
import HomeBanner from "../HomeBanner/HomeBanner";
import Steps from "../Steps/Steps";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useScrollToTop();
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>GraphicsGround | Home</title>
      </Helmet>
      <HomeBanner />
      <LogosDesign />
      {/* <FeturedSection /> */}
      <Steps />
    </div>
  );
};

export default Home;
