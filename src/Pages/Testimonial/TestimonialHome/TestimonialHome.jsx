import { Helmet } from "react-helmet-async";
import SharedBanner from "./../../Shared/SharedBanner/SharedBanner";
import { useEffect, useState } from "react";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TestimonialDesing from "../TestimonialDesing/TestimonialDesing";

const TestimonialHome = () => {
  const axiosPublic = useAxiosPublic();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosPublic.get("/review");
        setReviews(response.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const readyMade = reviews.filter(
    (item) => item.category === "Ready-made logo service"
  );
  const custom = reviews.filter(
    (item) => item.category === "Custom logo service"
  );
  const brand = reviews.filter(
    (item) => item.category === "Brand guideline service"
  );
  const packaging = reviews.filter(
    (item) => item.category === "Packaging service"
  );
  const imgToVector = reviews.filter(
    (item) => item.category === "Image to vector service"
  );
  return (
    <div>
      <title>GraphicsGround | Testimonial</title>
      <Helmet></Helmet>
      <div className="">
        <SharedBanner
          span2={"Testimonials"}
          sharedDetails={
            "Our list of verified reviews from client is constantly growing. No changes have been made to the reviews"
          }
        />
      </div>
      <div className="w-[1400px]  mx-auto my-16 ">
        <div className="flex text-dark-green font-sf-semibold sm:text-regular text-sm sm:justify-start justify-center sm:text-start text-center">
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>Ready-Made </Tab>
              <Tab>Custom Logo</Tab>
              <Tab>Brand Style Guide</Tab>
              <Tab>Packaging </Tab>
              <Tab>Image to Vector</Tab>
            </TabList>

            <TabPanel>
              {reviews.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ))}
            </TabPanel>

            <TabPanel className={" w-[1400px]"}>
              {readyMade.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ))}
            </TabPanel>
            <TabPanel>
              {custom.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ))}
            </TabPanel>
            <TabPanel>
              {brand.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ))}
            </TabPanel>
            <TabPanel>
              {packaging.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ))}
            </TabPanel>
            <TabPanel>
              {imgToVector.map((item) => (
                <TestimonialDesing
                  key={item._id}
                  items={item}
                ></TestimonialDesing>
              ))}
            </TabPanel>
          </Tabs>
        </div>
        <br />
        <br />
        {/* <h1 className="text-dark-green text-sub-header-1 font-sf-bold pb-8">
          Check out our customer Reviews
        </h1> */}
        <div className="flex flex-col gap-10"></div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default TestimonialHome;
