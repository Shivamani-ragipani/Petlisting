import React, { useEffect, useState } from "react";
import { Heart, MapPin } from "lucide-react";
import "./SimilarBreeds.css";

const SimilarBreeds = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch pets from backend
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("https://petlisting.onrender.com/api/breeds");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  if (loading) {
  return (
    <div className="main-pet-page loading-container">
      <div className="spinner"></div>
    </div>
  );
}

  return (
    <div className="similar-breeds">
      <div className="container">
        <h2 className="section-title">
          Similar <span className="highlight">Pet Breeds</span>
        </h2>
        <div className="breeds-grid">
          {pets.map((pet) => (
            <div key={pet.id} className="breed-card">
              <div className="card-header">
                <Heart className="heart-icon-card" />
              </div>
              <div className={`pet-image-card ${pet.image ? "has-image" : ""}`}>
                {pet.image ? (
                  <img src={pet.image} alt={pet.name} />
                ) : (
                  <span>Pet Image</span>
                )}
              </div>
              <div className="card-content">
                <h4 className="pet-name-card">{pet.name}</h4>
                <p className="pet-age">
                  {pet.age}, {pet.gender}
                </p>
                <div className="pet-location-card">
                  <MapPin className="location-icon" />
                  <span>{pet.location}</span>
                </div>
                <p className="pet-price">{pet.price}</p>
                <p className="post-date">Posted on {pet.postDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarBreeds;
