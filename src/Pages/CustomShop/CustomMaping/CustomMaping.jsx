import React from "react";
import usePackage from "../../../hooks/usePackage";
import CustomSinglePackage from "../CustomSinglePackage/CustomSinglePackage";
import useScrollToTop from "./../../../hooks/useScrollToTop ";

const CustomMaping = () => {
  const [packages] = usePackage();
  useScrollToTop();
  // console.log(packages, "hitting from shop");
  // console.log(pack)
  return (
    <div className="2xl:w-[1400px] xl:w-[75%] lg:w-[90%] mx-auto">
      <br />
      <div className="grid grid-cols-1 place-items-center 2xl:grid-cols-4 xl:grid-cols-3 sm:place-items-stretch lg:grid-cols-2 gap-y-13 gap-x-8 my-16">
        {packages.map((item, index) => (
          <CustomSinglePackage
            key={item._id}
            item={item}
            className={`opacity-0 translate-y-10 animate-fade-in-down delay-${
              index * 100
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomMaping;
