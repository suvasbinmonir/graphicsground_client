import { useEffect, useState } from "react";
import axios from "axios";
import useScrollToTop from "../../hooks/useScrollToTop ";

const ShowingImage = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useScrollToTop();

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get(
          `https://api.graphicsground.com/api/uploads`
        );
        setUploads(response.data);
      } catch (err) {
        setError("Error fetching uploads. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUploads();
  }, []);

  useEffect(() => {
    fetch(`https://api.graphicsground.com/api/uploads`)
      .then((res) => res.json())
      .then((data) => {
        console.log("file uploaded data", data);
        res.send(data);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Uploaded Files</h2>
      <ul>
        {uploads.map((upload) => (
          <li key={upload._id} className="mb-2">
            <h3 className="font-bold">{upload.title}</h3>
            <p>Name: {upload.name}</p>
            <div className="mt-2">
              <h4>Images:</h4>
              {upload.images.map((image, index) => (
                <img
                  key={index}
                  //   src={image}
                  src={`https://api.graphicsground.com/api/uploads/${image}`}
                  alt={`Uploaded ${index}`}
                  className="h-20 w-20 object-cover"
                />
              ))}
            </div>
            {upload.zipFile && (
              <div className="mt-2">
                <h4>Zip File:</h4>
                <a href={`uploads/${upload.zipFile}`} download>
                  {upload.zipFile}
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowingImage;
