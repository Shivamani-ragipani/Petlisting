import React, { useEffect, useState } from "react";
import { Heart, Link, Facebook, MessageCircle, Check } from "lucide-react";
import { useParams } from "react-router-dom";
import "./MainPetPage.css";

const MainPetPage = () => {
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

 useEffect(() => {
  const fetchBreed = async () => {
    try {
      let data;
      if (id) {
        const response = await fetch(`https://petlisting-internship-1.onrender.com/api/breeds/${id}`);
        data = await response.json();
      } else {
        const response = await fetch(`https://petlisting-internship-1.onrender.com/api/breeds`);
        data = await response.json();
        data = data[0]; // show the first pet as default
      }
      setBreed(data);
    } catch (error) {
      console.error("Error fetching breed:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchBreed();
}, [id]);


if (loading) {
  return (
    <div className="main-pet-page loading-container">
      <div className="spinner"></div>
    </div>
  );
}


  if (!breed) {
    return <div className="main-pet-page">No breed data available</div>;
  }

  return (
    <div className="main-pet-page">
      <div className="container">
        <div className="pet-content">
          {/* LEFT COLUMN */}
          <div className="left-column">
            <div className="pet-header">
              <h1 className="pet-name">{breed.name}</h1>
              <div className="pet-location">
                <span className="location-text">
                  {breed.location || "Unknown Location"}
                </span>
              </div>
              <div className="status-badge">{breed.status || "Available"}</div>
            </div>

            <div className="pet-image-section">
              <div
                className={`pet-image-placeholder ${
                  breed.image ? "has-image" : ""
                }`}
              >
                {breed.image ? (
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="pet-image"
                  />
                ) : (
                  <span>No Image</span>
                )}
                <Heart className="heart-icon" />
              </div>

              <div className="price-section">
                <div className="price-tag">Price: {breed.price || "N/A"}</div>
                <div className="post-date">
                  Post Date : {breed.postDate || "N/A"}
                </div>
              </div>
            </div>

            <div className="identifications">
              <h3>Identifications</h3>
              <p>{breed.identifications || "No identification info"}</p>
            </div>

            <div className="breed-info">
              <h3>{breed.name} Breed Information</h3>
              <div className="breed-details">
                <div className="breed-item">
                  <span className="breed-label">Origin</span>
                  <span className="breed-value">{breed.origin || "N/A"}</span>
                </div>
                <div className="breed-item">
                  <span className="breed-label">Ideal Space</span>
                  <span className="breed-value">
                    {breed.idealSpace || "N/A"}
                  </span>
                </div>
                <div className="breed-item">
                  <span className="breed-label">Coat Length</span>
                  <span className="breed-value">
                    {breed.coatLength || "N/A"}
                  </span>
                </div>
                <div className="breed-item">
                  <span className="breed-label">Life Expectancy</span>
                  <span className="breed-value">
                    {breed.lifeExpectancy || "N/A"}
                  </span>
                </div>
                <div className="breed-item">
                  <span className="breed-label">Coat Type</span>
                  <span className="breed-value">{breed.coatType || "N/A"}</span>
                </div>
                <div className="breed-item">
                  <span className="breed-label">Ideal Weather</span>
                  <span className="breed-value">
                    {breed.idealWeather || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <div className="owner-details">
              <h3>Owner Details</h3>
              <div className="owner-info">
                <div className="owner-name">
                  {breed.owner?.name || "Unknown"}
                </div>
                <div className="owner-location">
                  {breed.owner?.location || "N/A"}
                </div>
                <div className="verification-badges">
                  {breed.owner?.phoneVerified && (
                    <span className="verified-badge phone">Phone Verified</span>
                  )}
                  {breed.owner?.emailVerified && (
                    <span className="verified-badge email">Email Verified</span>
                  )}
                </div>
                <div className="action-buttons">
                  <button className="report-btn">Report User</button>
                  <button className="block-btn">Block</button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">
            <div className="share-section">
              <span className="share-text">Share :</span>
              <div className="share-buttons">
                <Link className="share-icon" />
                <Facebook className="share-icon facebook" />
                <MessageCircle className="share-icon whatsapp" />
              </div>
            </div>

            <div className="basic-info">
              <h3>Basic Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Pet Type</span>
                  <span className="info-value">{breed.type || "N/A"}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Age</span>
                  <span className="info-value">{breed.age || "N/A"}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Gender</span>
                  <span className="info-value">{breed.gender || "N/A"}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Color</span>
                  <span className="info-value">{breed.color || "N/A"}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Size</span>
                  <span className="info-value">{breed.size || "N/A"}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Pet Variety</span>
                  <span className="info-value">{breed.variety || "N/A"}</span>
                </div>
              </div>
            </div>

            <div className="additional-info">
              <h3>Additional Information</h3>
              <div className="additional-items">
                {breed.vaccinated && (
                  <div className="additional-item">
                    <Check className="check-icon" />
                    <span>Vaccinated</span>
                  </div>
                )}
                {breed.transport && (
                  <div className="additional-item">
                    <Check className="check-icon" />
                    <span>Transport service included</span>
                  </div>
                )}
                {!breed.vaccinated && !breed.transport && (
                  <p className="no-additional">
                    No additional information available.
                  </p>
                )}
              </div>
            </div>

            <div className="about-section">
              <h3>What you should know about {breed.name}</h3>
              <div className="about-content">
                {Array.isArray(breed.about) ? (
                  breed.about.map((line, idx) => {
                    // Split into first word + rest
                    const [firstWord, ...rest] = line.split(" ");
                    return (
                      <p key={idx}>
                        <span className="highlight-name">{firstWord}</span>{" "}
                        {rest.join(" ")}
                      </p>
                    );
                  })
                ) : (
                  <p>{breed.about || "No description available."}</p>
                )}
              </div>
            </div>

            <div className="interest-section">
              <span className="interest-text">If you are Interested</span>
              <button className="message-btn">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPetPage;
