import React, { useEffect, useState } from "react";
import { Heart, MapPin } from "lucide-react";
import "./SimilarBreeds.css";

const SimilarBreeds = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch pets from backend
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL || ""}/api/breeds`);
        if (!response.ok) throw new Error("Failed to fetch pets");
        const data = await response.json();
        setPets(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  if (loading) {
    return (
      <div className="similar-breeds">
        <div className="container">
          <h2 className="section-title">
            Similar <span className="highlight">Pet Breeds</span>
          </h2>
          <div className="breeds-grid">
            {Array(6)
              .fill()
              .map((_, i) => (
                <div key={i} className="breed-card skeleton"></div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="similar-breeds">
        <div className="container">
          <h2 className="section-title">
            Similar <span className="highlight">Pet Breeds</span>
          </h2>
          <p className="error-message">⚠️ {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="similar-breeds">
      <div className="container">
        <h2 className="section-title">
          Similar <span className="highlight">Pet Breeds</span>
        </h2>

        {pets.length === 0 ? (
          <p className="empty-message">No similar breeds found 🐶</p>
        ) : (
          <div className="breeds-grid">
            {pets.map((pet) => {
              const petImage = pet?.images?.length ? pet.images[0] : null;
              const petAge = pet?.basicInfo?.age || "N/A";
              const petGender = pet?.basicInfo?.gender || "Unknown";
              const petLocation = pet?.location || "Unknown";
              const petPrice = pet?.price
                ? new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(pet.price)
                : "N/A";
              const postDate = pet?.postDate
                ? new Date(pet.postDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "N/A";

              return (
                <div key={pet?._id || pet?.id} className="breed-card">
                  <div className="card-header">
                    <Heart className="heart-icon-card" />
                  </div>
                  <div className={`pet-image-card ${petImage ? "has-image" : ""}`}>
                    {petImage ? <img src={petImage} alt={pet.name || "Pet"} /> : <span>No Image</span>}
                  </div>
                  <div className="card-content">
                    <h4 className="pet-name-card">{pet?.name || "Unknown"}</h4>
                    <p className="pet-age">
                      {petAge}, {petGender}
                    </p>
                    <div className="pet-location-card">
                      <MapPin className="location-icon" />
                      <span>{petLocation}</span>
                    </div>
                    <p className="pet-price">{petPrice}</p>
                    <p className="post-date">Posted on {postDate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarBreeds;
