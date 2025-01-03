import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./CaseStudy.css";
import useCase from "../../hooks/useCase";
import CaseStudieCard from "../Shared/CaseStudieCard/CaseStudieCard";
import CustomShopTitle from "../Shared/CustomShopTitle/CustomShopTitle";
import { Helmet } from "react-helmet-async";
const CaseStudy = () => {
  const [caseStudie] = useCase();
  const custom = caseStudie.filter((item) => item.category === "custom");
  const brand = caseStudie.filter((item) => item.category === "brand");

  const packaging = caseStudie.filter((item) => item.category === "packaging");
  const imgToVector = caseStudie.filter(
    (item) => item.category === "imgToVector"
  );
  return (
    <>
      <Helmet>
        <title>GraphicsGround | CaseStudy</title>
      </Helmet>
      <div className="bg-[#f2f2f2] fade-in-container">
        <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] py-20 sm:mx-auto justify-center mx-5">
          <h1 className="text-tab-sub-header-1 sm:text-header text-atlantis-green font-sf-bold">
            Case Study
          </h1>
          <h1 className="text-dark-green font-sf-regular sm:text-regular slide-up">
            The Art of Branding: A Journey Through Graphic Design Solutions
          </h1>
        </div>
      </div>

      <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto">
        {/* ---------------------------------------------
                               TABS                      
            ---------------------------------------------- */}
        <div className="pt-9 flex justify-center items-center">
          <Tabs>
            <TabList className="text-dark-green font-sf-semibold  text-[16px] sm:text-regular pl-0 text-center">
              <Tab>All</Tab>
              <Tab>Custom Logo</Tab>
              <Tab>Brand Style Guide</Tab>
              <Tab>Packaging</Tab>
              <Tab>Image to Vector</Tab>
            </TabList>

            <TabPanel>
              <div className="grid sm:grid-cols-3 place-items-center gap-y-10 gap-x-8 mt-14">
                {caseStudie.map((item) => (
                  <CaseStudieCard key={item._id} item={item}></CaseStudieCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid sm:grid-cols-3 place-items-center gap-y-10 gap-x-8 mt-14">
                {custom.map((item) => (
                  <CaseStudieCard key={item._id} item={item}></CaseStudieCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid sm:grid-cols-3 place-items-center gap-y-10 gap-x-8 mt-14">
                {brand.map((item) => (
                  <CaseStudieCard key={item._id} item={item}></CaseStudieCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid sm:grid-cols-3 place-items-center gap-y-10 gap-x-8 mt-14">
                {packaging.map((item) => (
                  <CaseStudieCard key={item._id} item={item}></CaseStudieCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid sm:grid-cols-3 place-items-center gap-y-10 gap-x-8 mt-14">
                {imgToVector.map((item) => (
                  <CaseStudieCard key={item._id} item={item}></CaseStudieCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <br />
        <br />
        <CustomShopTitle
          subHeading={"Not happy with our ready-made designs?"}
          CustomShopLink={"Custom Shop"}
        ></CustomShopTitle>
      </div>
    </>
  );
};

export default CaseStudy;
