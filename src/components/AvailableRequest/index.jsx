import React from "react";
import AvailableCard from "../AvailableCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const AvailableRequest = () => {
  return (
    <div className="container search-wrapper mt-4">
      <div className="mb-4">
        <p className="available-request-title fw-bold">Available Requests</p>
        <a className="filter-responsive-btn" href="/">
          <FontAwesomeIcon icon={faFilter} />
        </a>
        <button type="button" className="btn add-travel-btn-responsive">
          Add my travel
        </button>
      </div>
      <div className="row m-auto card-container">
        <div className="col-lg-3 col-md-6 col-sm-12 pl-0 padding-cards">
          <AvailableCard />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 padding-cards">
          <AvailableCard />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 padding-cards">
          <AvailableCard />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pr-0 padding-cards">
          <AvailableCard />
        </div>
      </div>
    </div>
  );
};

export default AvailableRequest;
