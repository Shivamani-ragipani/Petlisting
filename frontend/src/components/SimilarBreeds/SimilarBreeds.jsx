import React, { useEffect, useState } from "react";
import { Heart, MapPin } from "lucide-react";
import "./SimilarBreeds.css";

const SimilarBreeds = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  let isMounted = true; // prevent state updates on unmounted component
  const controller = new AbortController();

  async function fetchPets() {
    setLoading(true);
    setError(null);

    try {
     const response = await fetch("/api/breeds", { signal: controller.signal });


      if (!response.ok) {
        throw new Error(`Failed to fetch pets: ${response.status}`);
      }

      const data = await response.json();

      if (isMounted) {
        setPets(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error fetching pets:", err);
        if (isMounted) setError(err.message);
      }
    } finally {
      if (isMounted) setLoading(false);
    }
  }

  fetchPets();

  return () => {
    isMounted = false;
    controller.abort();
  };
}, []);


  // Loading skeleton UI
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

  // Error UI
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

              const petImage = pet.images?.length ? pet.images[0] : null;

              const petAge = pet.basicInfo?.age || "N/A";
              const petGender = pet.basicInfo?.gender || "Unknown";

              return (
                <div key={pet._id} className="breed-card">
                  <div className="card-header">
                    <Heart className="heart-icon-card" />
                  </div>
                  <div
                    className={`pet-image-card ${petImage ? "has-image" : ""}`}
                  >
                    {petImage ? (
                      <img src={petImage} alt={pet.name} />
                    ) : (
                      <span>No Image</span>
                    )}
                  </div>
                  <div className="card-content">
                    <h4 className="pet-name-card">{pet.name}</h4>
                    <p className="pet-age">
                      {petAge}, {petGender}
                    </p>
                    <div className="pet-location-card">
                      <MapPin className="location-icon" />
                      <span>{pet.location}</span>
                    </div>
                    <p className="pet-price">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(pet.price)}
                    </p>
                    <p className="post-date">
                      Posted on{" "}
                      {new Date(pet.postDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
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
