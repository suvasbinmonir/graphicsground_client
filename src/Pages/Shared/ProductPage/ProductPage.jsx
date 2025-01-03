import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import img from "/logo-5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomShopTitle from "../CustomShopTitle/CustomShopTitle";
import { Link, useLocation, useParams } from "react-router-dom";
import useLogos from "../../../hooks/useLogos";
import { useEffect, useState } from "react";
const descriptions = `
  The Agriculture Landscape Sun Logo perfectly blends nature and modern design, making it an excellent choice for agricultural, farming, or eco-conscious businesses. With a bright sun rising over a vibrant landscape, this logo symbolizes growth, vitality, and sustainability. The clean, hexagonal shape adds a contemporary edge, while the green tones reflect a commitment to eco-friendly practices.
`;

const points = [
  "Modern and professional: The geometric design ensures your brand stands out with a sleek, fresh look.",
  "Represents growth and sustainability: The sun and landscape elements highlight your dedication to agriculture, farming, and environmental responsibility.",
  "Versatile for various industries: Ideal for agro-businesses, farming enterprises, and eco-friendly ventures.",
  "Memorable and impactful: Its unique design makes it easy to recognize and associate with a strong brand identity.",
];

const conclusion = `
  This logo is an ideal choice for businesses looking to communicate their commitment to sustainable growth and the agricultural industry. With its striking design and meaningful symbolism, it will make a lasting impression on customers and clients.
`;
const ProductPage = () => {
  const [dt, setDt] = useState();
  const { id } = useParams();
  const [logos] = useLogos();
  useEffect(() => {
    if (logos.length > 0) {
      const foundData = logos.find((dt) => dt._id === id);
      setDt(foundData);
    }
  }, [logos, id]);
  if (!dt) return <div>Loading...</div>;

  return (
    <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] sm:mx-auto mx-5 mt-10 mb-5 ">
      <div className=" flex justify-between flex-col sm:flex-row mx-auto gap-4 pt-20">
        <div className="sm:w-3/6">
          <img
            className="rounded-lg border-2 sm:w-[650px]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
            src={dt.imageUrls[1]}
            alt=""
          />
          <div className="">
            <div className="flex items-center justify-between flex-row-reverse mt-5  sm:hidden">
              <p className="text-sub-header-2 pb-2 font-sf-bold text-dark-green pt-0 mt-0">
                ${dt.price}
              </p>
              {dt.status === "Purchased" ? (
                <span
                  className={
                    "w-fit  rounded-lg px-14   py-2 text-regular  my-5 font-sf-bold bg-gray-600 text-white "
                  }
                >
                  Sold
                </span>
              ) : (
                <Link
                  to={`/product-page/${dt._id}/${dt.title}`}
                  className={
                    "w-fit border rounded-lg px-6 bg-atlantis-green text-dark-green py-2 text-regular  my-5 font-sf-bold "
                  }
                >
                  {dt.status === "Purchased" ? "Sold" : "Buy this logo"}
                </Link>
              )}
            </div>
            <h1 className="text-sub-header-2 font-sf-bold text-atlantis-green sm:mt-8">
              {dt.title}
            </h1>
          </div>
        </div>
        <div className="sm:w-3/6">
          <div className="hidden sm:block">
            <h1 className="text-sub-header-2 pb-2 font-sf-bold text-dark-green -mt-2">
              ${dt.price}
            </h1>
            {dt.status === "Purchased" ? (
              <span
                className={
                  "w-fit  rounded-lg px-14   py-2 text-regular  my-5 font-sf-bold bg-gray-600 text-white "
                }
              >
                Sold
              </span>
            ) : (
              <Link
                to={`/product-page/${dt._id}/${dt.title}`}
                className={
                  "w-fit border rounded-lg px-6 bg-atlantis-green text-dark-green py-2 text-regular  my-5 font-sf-bold "
                }
              >
                {dt.status === "Purchased" ? "Sold" : "Buy this logo"}
              </Link>
            )}
          </div>
          <h1 className="text-[16px] sm:text-regular-lite text-dark-green py-5 font-sf-semibold">
            The moment you buy, it's gone. It can be used anywhere, anytime, for
            any purpose. Copyright is yours
          </h1>
          <h1 className="text-dark-green text-lg  sm:text-regular-lite">
            <span className="font-sf-medium">License type:</span> Exclusive,
            Copyright transfers to the buyer.
          </h1>

          <h1 className="text-lg  sm:text-regular-lite font-sf-medium text-dark-green pt-4 ">
            <FontAwesomeIcon className=" pr-2 w-5" icon={faCircleCheck} />
            An exclusive, trademarkable logo
          </h1>
          <h1 className="text-dark-green text-sm sm:text-minimum pb-3">
            The buyer will own the copyright to this logo. It will only be sold
            once.
          </h1>

          <h1 className="text-dark-green font-sf-medium text-lg  sm:text-regular-lite">
            <FontAwesomeIcon className=" pr-2 w-5" icon={faCircleCheck} />A
            solid 100% <span className="text-dark-green">Money-Back </span>
            Guarantee
          </h1>
          <h1 className="text-dark-green text-sm sm:text-minimum pb-3 ">
            There are no service fees, no fine print, and no hassles. If you
            don't love it, you get your money back. Every penny.
          </h1>

          <h1 className="text-lg  sm:text-regular-lite text-dark-green font-sf-medium">
            <FontAwesomeIcon
              className=" pr-2 w-5 text-dark-green"
              icon={faCircleCheck}
            />
            Customization
          </h1>
          <h1 className="text-dark-green text-sm sm:text-minimum pb-3 ">
            You can request to change text (or addition), color, minor design
            changes. No additional cost.
          </h1>

          <h1 className="text-lg  sm:text-regular-lite font-sf-medium text-dark-green">
            <FontAwesomeIcon
              className=" pr-2 w-5 text-dark-green "
              icon={faCircleCheck}
            />
            All <span className="text-dark-green">files</span> Format
          </h1>
          <h1 className="text-dark-green text-sm sm:text-minimum pb-8">
            We can provide all file format
          </h1>
        </div>
      </div>
      <div className="pt-5">
        <h1 className="text-dark-green text-regular font-sf-bold">
          Logo Description
        </h1>
        <h1 className="text-sm  sm:text-regular-lite font-sf-regular text-dark-green pt-1">
          <span className="leading-6">{descriptions}</span>
          <div className="pt-4">
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              {points.map((point, index) => (
                <li key={index} className="py-1">
                  {point}
                </li>
              ))}
            </ul>
            <p className="pt-3 leading-6">{conclusion}</p>
          </div>
        </h1>
        <h1 className="text-tab-regular font-sf-semibold text-atlantis-green mt-10">
          {dt.tag
            .split(", ") // Split the tags by commas
            .map((tag, index) => `#${tag}`) // Add '#' to each word
            .join(" ")}{" "}
        </h1>
      </div>
      <CustomShopTitle
        subHeading={"Not happy with our ready-made designs? "}
        CustomShopLink={"Custom Shop"}
      ></CustomShopTitle>
    </div>
  );
};

export default ProductPage;
