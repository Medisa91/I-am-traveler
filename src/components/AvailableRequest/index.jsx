import React from "react";
import AvailableCard from "../AvailableCard";

const AvailableRequest = () => {
  return (
    <div className="container search-wrapper mt-4">
      <p className="available-request-title fw-bold">Available Requests</p>
      <div className="row m-auto">
        <div className="col-3 col-md-3 col-sm-6 pl-0 padding-cards">
          <AvailableCard />
        </div>
        <div className="col-3 col-md-3 col-sm-6 padding-cards">
          <AvailableCard />
        </div>
        <div className="col-3 col-md-3 col-sm-6 padding-cards">
          <AvailableCard />
        </div>
        <div className="col-3 col-md-3 col-sm-6 pr-0 padding-cards">
          <AvailableCard />
        </div>
      </div>
    </div>
  );
};

export default AvailableRequest;
