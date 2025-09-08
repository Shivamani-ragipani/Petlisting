import React, { useEffect, useState } from "react";
import {
  Heart,
  Link as LinkIcon,
  Facebook,
  MessageCircle,
  Check,
} from "lucide-react";
import { useParams } from "react-router-dom";
import "./MainPetPage.css";
import SimilarBreeds from "../SimilarBreeds/SimilarBreeds";

const MainPetPage = () => {
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchBreed = async () => {
      try {
        const response = await fetch(`/api/breeds`);
        const data = await response.json();

        if (!data || data.length === 0) {
          setBreed(null);
          return;
        }

        if (id) {
          const breedData =
            data.find((b) => b._id === id) ||
            data.find((b) => b.id?.toString() === id.toString());
          setBreed(breedData || null);
        } else {
          setBreed(data[0]);
        }
      } catch (error) {
        console.error(error);
        setBreed(null);
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
    return (
      <div className="No-breed-data">
        No breed data available.
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  const formattedDate = breed.postDate
    ? new Date(breed.postDate).toLocaleDateString()
    : "N/A";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };

  const handleWhatsAppShare = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  const handleReportUser = () => alert("User reported successfully.");
  const handleBlockUser = () => alert("User has been blocked.");
  const handleMessage = () => alert("Message sent to the owner.");

  return (
    <>
      <div className="main-pet-page">
        <div className="container">
          <div className="pet-content">
            <div className="left-column">
              <div className="pet-header">
                <h1 className="pet-name">{breed.name}</h1>
                <div className="pet-location">
                  <span className="location-text">
                    {breed.location || "Unknown Location"}
                  </span>
                </div>
                <div
                  className={`status-badge ${
                    breed.status?.toLowerCase() || "available"
                  }`}
                >
                  {breed.status || "Available"}
                </div>
              </div>

              <div className="pet-image-section">
                <div
                  className={`pet-image-placeholder ${
                    breed.images && breed.images.length > 0 ? "has-image" : ""
                  }`}
                >
                  {breed.images && breed.images.length > 0 ? (
                    <img src={breed.images[0]} alt={breed.name} className="pet-image" />
                  ) : (
                    <span>No Image</span>
                  )}
                  <Heart className="heart-icon" />
                </div>
                <div className="price-section">
                  <div className="price-tag">
                    Price: ₹{breed.price ? breed.price.toLocaleString() : "N/A"}
                  </div>
                  <div className="post-date">Post Date : {formattedDate}</div>
                </div>
              </div>

              <div className="identifications">
                <h3>Identifications</h3>
                <p>{breed.identifications || "No identification info"}</p>
              </div>

              <div className="breed-info">
                <h3>{breed.name} Breed Information</h3>
                <div className="breed-details">
                  {[
                    "origin",
                    "idealSpace",
                    "coatLength",
                    "lifeExpectancy",
                    "coatType",
                    "idealWeather",
                  ].map((key) => (
                    <div className="breed-item" key={key}>
                      <span className="breed-label">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <span className="breed-value">
                        {breed.breedInformation?.[key] || "N/A"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="owner-details">
                <h3>Owner Details</h3>
                <div className="owner-info">
                  <div className="owner-name-location">
                    <div className="owner-name">{breed.ownerDetails?.ownerName || "Unknown"}</div>
                    <div className="owner-location">{breed.ownerDetails?.location || "N/A"}</div>
                  </div>
                  <div className="verification-badges">
                    {breed.ownerDetails?.verified ? (
                      <span className="verified-badge verified">Verified</span>
                    ) : (
                      <span className="verified-badge unverified">Unverified</span>
                    )}
                  </div>
                </div>
                <div className="action-buttons">
                  <button className="report-btn" onClick={handleReportUser}>Report User</button>
                  <button className="block-btn" onClick={handleBlockUser}>Block</button>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="share-section">
                <span className="share-text">Share :</span>
                <div className="share-buttons">
                  <LinkIcon className="share-icon" onClick={handleCopyLink} />
                  <Facebook className="share-icon facebook" onClick={handleFacebookShare} />
                  <MessageCircle className="share-icon whatsapp" onClick={handleWhatsAppShare} />
                </div>
              </div>

              <div className="basic-info">
                <h3>Basic Information</h3>
                <div className="info-grid">
                  {["petType","age","gender","color","size","petVariety"].map((key) => (
                    <div className="info-item" key={key}>
                      <span className="info-label">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="info-value">{breed.basicInfo?.[key] || "N/A"}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="additional-info">
                <h3>Additional Information</h3>
                <div className="additional-items">
                  {breed.additionalInfo?.vaccinated && (
                    <div className="additional-item">
                      <Check className="check-icon" />
                      <span>Vaccinated</span>
                    </div>
                  )}
                  {breed.additionalInfo?.transportServiceIncluded && (
                    <div className="additional-item">
                      <Check className="check-icon" />
                      <span>Transport service included</span>
                    </div>
                  )}
                  {!breed.additionalInfo?.vaccinated &&
                    !breed.additionalInfo?.transportServiceIncluded && (
                      <p className="no-additional">No additional information available.</p>
                    )}
                </div>
              </div>

              <div className="about-section">
                <h3>About {breed.name}</h3>
                <div className="about-content">
                  <p>{breed.description || "No description available."}</p>
                </div>
              </div>

              <div className="interest-section">
                <span className="interest-text">If you are Interested</span>
                <button className="message-btn" onClick={handleMessage}>Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show similar breeds below */}
      <SimilarBreeds />
    </>
  );
};

export default MainPetPage;
