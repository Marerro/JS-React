import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DonorList() {
  const [donors, setDonors] = useState([]);

  const getDonors = async () => {
    try {
      const response = await fetch("http://localhost:5000/donors");
      const data = await response.json();
      // Surūšiuojame pagal pavardę
      const sortedDonors = data.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
      setDonors(sortedDonors);
    } catch (error) {
      console.error("Error fetching donors", error);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);

  return (
    <>
      <div className="grid gap-4">
        {donors.map((donor) => (
          <div key={donor.id} className="w-3/4 m-auto">
              <p>{donor.firstName} {donor.lastName} </p>
            <p>Age: {donor.age}</p>
            <Link
              to={`/donor/${donor.id}`}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
            >
              Peržiūrėti išsamiau
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default DonorList;
