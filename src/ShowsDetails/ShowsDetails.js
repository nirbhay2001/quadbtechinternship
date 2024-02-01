import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./showDetails.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ShowsDetails = () => {
  const { showId } = useParams();

  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        const data = await response.json();
        setShowData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    if (showId) {
      fetchShowDetails();
    }
  }, [showId]);

  if (!showData) {
    return (
      <div className="row justify-content-center">
        <div className="col-md-5" id="service-image">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="row justify-content-center">
        <div
          className="col-md-5  "
          id="service-image"
          style={{ marginTop: "75px" }}
        >
          <img
            src={showData && showData.image && showData.image.original}
            alt="image"
            className="img-fluid"
            style={{ height: "300px", width: "300px" }}
          />
        </div>
        <div
          className="col-md-5 col-11"
          id="service-text"
          style={{ marginTop: "75px" }}
        >
          <div className="card-body text-white description">
            <h5 className="card-title mt-4">{showData.name}</h5>
            <p className="card-text mt-4">{showData.summary}</p>
          </div>
          <ul className=" list-group-flush text-white mt-3">
            <li className="list-group-item mt-2">
              <strong>Genres:</strong> {showData.genres.join(", ")}
            </li>
            <li className="list-group-item mt-2">
              <strong>Status:</strong> {showData.status}
            </li>
            <li className="list-group-item mt-2">
              <strong>Language:</strong> {showData.language}
            </li>
            <li className="list-group-item mt-2">
              <strong>Runtime:</strong> {showData.runtime} minutes
            </li>
            <li className="list-group-item mt-2">
              <strong>Network:</strong> {showData.network.name}
            </li>
            <li className="list-group-item mt-2">
              <strong>Schedule:</strong> {showData.schedule.time} on{" "}
              {showData.schedule.days.join(", ")}
            </li>
            <li className="list-group-item">
              <strong>Rating:</strong>{" "}
              {showData.rating && showData.rating.average}
            </li>
          </ul>
          <div className="card-body">
            <a
              href={showData.officialSite}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Site
            </a>
          </div>
          <Link to="/ticketbokking">
            <button className="btn-button">Ticket Booking</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowsDetails;
