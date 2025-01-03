import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const SuggestionBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, email, suggestion });
    // Logic to handle form submission goes here
  };
  return (
    <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto p-16">
      <div className="pb-14  ">
        <h1 className="text-header font-sf-bold text-dark-green">
          Suggestion Box
        </h1>
        <div className="flex items-center gap-x-2 border-b pb-4">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            Suggestion Box
          </h1>
        </div>
      </div>

      <p className="mb-6 text-dark-green font-sf-regular text-minimum">
        We welcome your suggestions and ideas to help improve GraphicsGround.
        Although we may not respond directly to each submission, we carefully
        read and appreciate every suggestion, implementing many of them to
        enhance our service. Please submit your suggestion in English, as we may
        not be able to review messages in other languages. <br />
        <br />
        For assistance or if you need a response, please use our contact form
        instead.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-dark-green font-sf-regular">
            Name (Optional)
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border p-2 bg-white rounded-sm  focus:ring focus:ring-opacity-50 focus:ring-green-500"
              placeholder="Please include your name"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-dark-green font-sf-regular">
            Mail (Optional)
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 border p-2 block w-full bg-white  rounded-sm focus:ring focus:ring-opacity-50 focus:ring-green-500"
              placeholder="Please include your email"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-dark-green font-sf-regular">
            Suggestion
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="mt-1 block w-full border p-2 bg-white rounded-sm  focus:ring focus:ring-opacity-50 focus:ring-green-500"
              rows="4"
              placeholder="Please include your suggestion"
            />
          </label>
        </div>
        <br />
        <button
          type="submit"
          className="bg-atlantis-green text-dark-green font-sf-bold py-2 px-4 rounded-md hover:bg-green-700"
        >
          Send Suggestion
        </button>
      </form>
    </div>
  );
};

export default SuggestionBox;
