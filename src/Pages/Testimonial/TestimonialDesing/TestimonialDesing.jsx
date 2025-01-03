const TestimonialDesing = ({ items }) => {
  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-teal-400",
    "bg-indigo-400",
    "bg-orange-400",
    "bg-gray-400",
  ];

  // Deterministic function to get a color based on ID
  const getColor = (id) => {
    const index =
      id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
      colors.length;
    return colors[index];
  };
  const dynamicColor = getColor(items._id); // Deterministic color for each review

  const countryFlags = {
    "United States": "https://flagcdn.com/us.svg",
    Canada: "https://flagcdn.com/ca.svg",
    Japan: "https://flagcdn.com/jp.svg",
    Germany: "https://flagcdn.com/de.svg",
    "United Kingdom": "https://flagcdn.com/gb.svg",
    France: "https://flagcdn.com/fr.svg",
    Australia: "https://flagcdn.com/au.svg",
    Netherlands: "https://flagcdn.com/nl.svg",
    Italy: "https://flagcdn.com/it.svg",
    Spain: "https://flagcdn.com/es.svg",
  };

  // Helper function to get a random country
  const getFixedCountry = (id) => {
    const countryKeys = Object.keys(countryFlags); // Get all country names
    const index =
      id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
      countryKeys.length; // Calculate index based on ID
    return [countryKeys[index]]; // Return the country as an array for consistency
  };

  // Use `items.countries` if available; otherwise, deterministically assign a country
  const countries = items.countries || getFixedCountry(items._id);

  const label =
    items.category === "Ready-made logo service"
      ? "Ready-made"
      : items.category === "Custom logo service"
      ? "Custom Logo"
      : items.category === "Brand guideline service"
      ? "Brand Guide"
      : items.category === "Packaging service"
      ? "Packaging"
      : "Vector";

  return (
    <div className="mt-10">
      <div
        key={items._id}
        className="border rounded-2xl p-4 sm:w-full w-[400px] "
      >
        <div className="flex gap-4 items-center border-b pb-3">
          <div
            className={`w-14 border h-14 text-center flex items-center justify-center text-white rounded-full ${dynamicColor} text-regular font-sf-bold`}
          >
            {items.name
              .split(" ")
              .slice(0, 1)
              .map((word) => word[0])
              .join("")}
          </div>
          <div className="mt-1">
            <h1 className="text-atlantis-green font-sf-bold text-regular">
              {items.name}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              {/* Loop through countries and display corresponding flags */}
              {countries.map((country) => {
                const flagUrl = countryFlags[country]; // Get the flag URL
                if (!flagUrl) return null; // Skip if the country is not in countryFlags
                return (
                  <div key={country} className="flex items-center gap-3">
                    <img
                      src={flagUrl}
                      alt={`${country} flag`}
                      className="w-6 h-4 border rounded-sm"
                    />
                    <h1 className="text-dark-green font-sf-regular text-sm">
                      {country}
                    </h1>
                  </div>
                );
              })}
              <h1 className="text-[13px] text-gray-400">|</h1>
              <h1 className="text-[10px] text-dark-green font-sf-regular border rounded-3xl w-fit px-3 py-0 border-dark-green">
                {label}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex gap-1 items justify-between flex-col sm:flex-row pt-3">
            <div className="cursor-default	">
              <div className="flex gap-3 ">
                <div className="rating ">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400 w-4 cursor-default"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400 w-4 cursor-default"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400 w-4 cursor-default"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400 w-4 cursor-default"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400 w-4 cursor-default"
                    defaultChecked
                    disabled
                  />
                </div>
                <h1 className="text-dark-green font-sf-regular text-sm mt-1">
                  {items.rating} &nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;&nbsp; 1 day
                  ago
                </h1>
              </div>{" "}
              <div className="sm:w-[1150px] w-full pt-3 ">
                <h1 className="text-dark-green font-sf-regular text-regular-lite">
                  {items.reviewDetails}
                </h1>
              </div>
            </div>
            <div className="w-full sm:flex justify-end hidden ">
              <div className="h-28 w-44 rounded-lg ">
                <img
                  src={items.imageURL}
                  className="border border-dark-green rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <br />
          {/* <hr className="border-dark-green" /> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialDesing;
