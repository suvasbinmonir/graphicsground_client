import React from "react";
import { useNavigate } from 'react-router-dom';
import './CaseStudieCard.css';

const CaseStudieCard = ({ item }) => {
  const { _id, category, name, fields } = item;
  const navigate = useNavigate();

  // Get the URL of the first image in the fields array
  const imageUrl = fields[0]?.url;

  // Handle click to navigate to full case study
  const handleCardClick = () => {
    navigate(`/case-study/${_id}`);
  };

  return (
    <div className="card bg-base-100 w-[320px] rounded-md shadow-lg cursor-pointer upDownAnimation" onClick={handleCardClick}>
      <figure>
        {/* Set image source dynamically */}
        <img src={imageUrl} alt={category} className="w-full h-auto" />
      </figure>
      <div className="card-body py-5 px-4 bg-white">
        <h2 className="font-sf-semibold text-dark-green text-regular-lite">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default CaseStudieCard;
