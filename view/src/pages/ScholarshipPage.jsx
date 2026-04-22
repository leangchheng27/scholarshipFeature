import { useState, useEffect } from "react";
import { getScholarships } from "../api/scholarshipApi.js";

const ScholarshipPage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        setLoading(true);
        const data = await getScholarships();
        setScholarships(data);
      } catch (error) {
        setError("Failed to load scholarships");
      } finally {
        setLoading(false);
      }
    };
    fetchScholarships();
  }, []);

  // loading state
  if (loading) return <p>Loading...</p>;

  // error state
  if (error) return <p>{error}</p>;

  // render list
    return (
      <div>
        {scholarships.map((scholarship) => (
            <div key={scholarship.id}>
                <h2>{scholarship.name}</h2>
                <p>{scholarship.type}</p>
            </div>
        ))}
      </div>
    );
};

export default ScholarshipPage;
