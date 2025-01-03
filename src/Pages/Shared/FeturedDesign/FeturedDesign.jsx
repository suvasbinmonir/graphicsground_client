import "./FeturedDesign.css";

const FeturedDesign = ({ item }) => {
  const { title, image, price, imageUrls } = item;

  return (
    <div className="m-3 group ">
      <img
        className="border border-dark-green rounded-md transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
        src={imageUrls[1]}
        alt={title}
      />
      <div className="flex justify-between items-center pt-2">
        {/* <h1 className="text-minimum font-dark-green font-sf-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {title}
        </h1> */}
        {/* <h1 className="text-[18px] font-dark-green font-sf-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-1">
          ${price}
        </h1> */}
      </div>
      <br />
    </div>
  );
};

export default FeturedDesign;
