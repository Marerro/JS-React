import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DonorDetails() {
  const { id } = useParams(); // Gauti ID iš URL
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    const fetchDonor = async () => {
      try {
        const response = await fetch(`http://localhost:5000/donors/${id}`);
        const data = await response.json();
        setDonor(data);
      } catch (error) {
        console.error("Error fetching donor:", error);
      }
    };

    fetchDonor();
  }, [id]);

  if (!donor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 w-3/4 m-auto">
      <h1 className="text-2xl font-bold mb-4">Donor Details</h1>
      <div className="p-4 border border-gray-300 rounded shadow">
        <h2 className="font-bold text-lg">{donor.firstName} {donor.lastName}</h2>
        <p>Age: {donor.age}</p>
        <p>Gender: {donor.gender}</p>
        <p>Blood Group: {donor.bloodGroup}</p>
      </div>
    </div>
  );
}

export default DonorDetails;