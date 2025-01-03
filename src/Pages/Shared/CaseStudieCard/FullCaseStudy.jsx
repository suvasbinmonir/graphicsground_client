import { useParams } from "react-router-dom";
import useCase from "../../../hooks/useCase";
import { useEffect, useState } from "react";

const FullCaseStudy = () => {
    const [dt, setDt] = useState(null)
    const { id } = useParams(); 
    const [caseStudie] = useCase()
    useEffect(() => {
        if (caseStudie.length > 0) { 
          const foundData = caseStudie.find(item => item._id === id); 
          setDt(foundData);
        }
      }, [id, caseStudie]);
      if (!dt) return <div>Loading client details...</div>;
      const {_id, name, category, fields} = dt
      const sortedImages = fields.sort((a, b) => {
        const idA = parseInt(a.customId.split('-')[1], 10);
        const idB = parseInt(b.customId.split('-')[1], 10);
        return idA - idB; // Ascending order
      });
    
    return (
        <div className="2xl:w-[1400px] mx-auto my-16 shadow-md">
            <h1 className="text-center text-header pb-5 font-sf-bold">{name}</h1>
            {
                sortedImages.map(image => (
                    <div key={image.customId}>
                      <img src={image.url} alt={`Image ${image.customId}`} />
                      {/* <p>{image.customId}</p> */}
                    </div>
                  ))
            }
        </div>
    );
};

export default FullCaseStudy;