import React from "react";
import FlightIcon from "../../assets/images/svg/flight.svg";
import HotelIcon from "../../assets/images/svg/hotel.svg";
import LocationIcon from "../../assets/images/svg/location.svg";
import CalendarIcon from "../../assets/images/svg/calendar.svg";
import PlaneIcon from "../../assets/images/plane.png";

const SearchBox = () => {
  return (
    <div className="container search-wrapper">
      <ul className="nav nav-tabs">
        <li className="nav-item tab-search-box">
          <a className="nav-link active fw-bold" aria-current="page" href="/">
            <img src={FlightIcon} className="tab-icons" alt="flight-img" />I am
            traveler
          </a>
        </li>
        <li className="nav-item tab-search-box">
          <a className="nav-link fw-normal" href="/">
            <img src={HotelIcon} className="tab-icons" alt="hotal-img" />I am
            looking for traveler
          </a>
        </li>
      </ul>
      <div className="search-container">
        <div className="row m-auto">
          <div className="col">
            <p className="search-departure-info">Departure Info</p>
            <p className="search-departure-title fw-bold">
              <img
                src={LocationIcon}
                className="tab-icons"
                alt="location-img"
              />
              Yogyakarta
            </p>
            <p className="search-departure">N790AN, Indonesia</p>
          </div>
          <div className="col">
            <p className="search-departure-info">Departure Time</p>
            <p className="search-departure-title fw-bold">
              <img
                src={CalendarIcon}
                className="tab-icons"
                alt="location-img"
              />
              17 July 2021
            </p>
            <p className="search-departure">20:15 (+8GMT)</p>
          </div>
          <div className="col m-auto text-center">
            <img
              src={PlaneIcon}
              className="search-plane-icon"
              alt="location-img"
            />
            <a href="/" className="change-flight-text d-block fw-normal">
              Change Flight
            </a>
          </div>
          <div className="col">
            <p className="search-departure-info">Arrival Info</p>
            <p className="search-departure-title fw-bold">
              <img
                src={LocationIcon}
                className="tab-icons"
                alt="location-img"
              />
              Tokyo
            </p>
            <p className="search-departure">N790AN, Japan</p>
          </div>
          <div className="col">
            <p className="search-departure-info">Arrival Time</p>
            <p className="search-departure-title fw-bold">
              <img
                src={CalendarIcon}
                className="tab-icons"
                alt="location-img"
              />
              25 July 2021
            </p>
            <p className="search-departure">20:15 (+8GMT)</p>
          </div>
          <div className="col m-auto text-center">
            <button type="button" class="btn btn-lg search-btn">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
