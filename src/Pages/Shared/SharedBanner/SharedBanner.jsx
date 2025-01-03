import "./ShardBanner.css";
import bg from "/header-bg.png";
const SharedBanner = ({ sharedTitle, sharedDetails, span2 }) => {
  return (
    <div
      className="flex justify-center py-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        // height: "200px",
      }}
    >
      <div className=" xl:w-[90%] 2xl:w-[1400px] lg:w-[90%] w-[100%] sm:py-12 py-8  mx-5 sm:mx-0">
        <div className="flex sm:gap-2">
          <h1 className="2xl:text-header xl:text-sub-header lg:text-tab-header  font-sf-bold text-dark-green text-tab-sub-header-1 animate-slide-up p-0">
            {sharedTitle}
          </h1>
          <span className="2xl:text-header xl:text-sub-header lg:text-tab-header font-sf-bold text-atlantis-green text-tab-sub-header-1 animate-slide-up">
            {span2}
          </span>
        </div>
        <h1 className="2xl:text-regular xl:text-regular-lite lg:text-regular-lite font-sf-regular text-dark-green text-[16px] animate-slide-up">
          {sharedDetails}
        </h1>
      </div>
    </div>
  );
};

export default SharedBanner;
